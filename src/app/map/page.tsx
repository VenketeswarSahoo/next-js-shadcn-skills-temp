"use client";

import { useState, useEffect, useRef } from "react";
import {
  Map,
  MapControls,
  MapMarker,
  MapRoute,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
  MarkerTooltip,
  type MapRef,
} from "@/components/ui/map";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HugeiconsIcon } from "@hugeicons/react";
import { MapPin } from "@hugeicons/core-free-icons";

const styles = {
  default: undefined,
  openstreetmap: "https://tiles.openfreemap.org/styles/bright",
  openstreetmap3d: "https://tiles.openfreemap.org/styles/liberty",
};

type StyleKey = keyof typeof styles;

export default function MapPage() {
  const mapRef = useRef<MapRef>(null);
  const [style, setStyle] = useState<StyleKey>("default");
  const selectedStyle = styles[style];
  const is3D = style === "openstreetmap3d";

  useEffect(() => {
    mapRef.current?.easeTo({ pitch: is3D ? 60 : 0, duration: 500 });
  }, [is3D]);

  const [start, setStart] = useState<{name: string; lng: number; lat: number} | null>(null);
  const end = { name: "Destination", lat: 20.307060655975867, lng: 85.82382261061497 };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStart({
            name: "Current Location",
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (start && mapRef.current) {
      mapRef.current.easeTo({ center: [start.lng, start.lat], zoom: 12, duration: 1000 });
    }
  }, [start]);

  interface RouteData {
    coordinates: [number, number][];
    duration: number; // seconds
    distance: number; // meters
  }

  function formatDuration(seconds: number): string {
    const mins = Math.round(seconds / 60);
    if (mins < 60) return `${mins} min`;
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return `${hours}h ${remainingMins}m`;
  }

  function formatDistance(meters: number): string {
    if (meters < 1000) return `${Math.round(meters)} m`;
    return `${(meters / 1000).toFixed(1)} km`;
  }

  const [routes, setRoutes] = useState<RouteData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRoutes() {
      if (!start) return;
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson&alternatives=true`,
        );
        const data = await response.json();

        if (data.routes?.length > 0) {
          const routeData: RouteData[] = data.routes.map(
            (route: {
              geometry: { coordinates: [number, number][] };
              duration: number;
              distance: number;
            }) => ({
              coordinates: route.geometry.coordinates,
              duration: route.duration,
              distance: route.distance,
            }),
          );
          setRoutes(routeData);
        }
      } catch (error) {
        console.error("Failed to fetch routes:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRoutes();
  }, [start]); // eslint-disable-line react-hooks/exhaustive-deps

  // Sort routes: non-selected first, selected last (renders on top)
  const sortedRoutes = routes
    .map((route, index) => ({ route, index }))
    .sort((a, b) => {
      if (a.index === selectedIndex) return 1;
      if (b.index === selectedIndex) return -1;
      return 0;
    });

  return (
    <div className="relative h-screen w-full">
      <Map ref={mapRef} center={start ? [start.lng, start.lat] : [end.lng, end.lat]} zoom={start ? 12 : 8}>
        {sortedRoutes.map(({ route, index }) => {
          const isSelected = index === selectedIndex;
          return (
            <MapRoute
              key={index}
              coordinates={route.coordinates}
              color={isSelected ? "#6366f1" : "#94a3b8"}
              width={isSelected ? 6 : 5}
              opacity={isSelected ? 1 : 0.6}
              onClick={() => setSelectedIndex(index)}
            />
          );
        })}

        {start && (
          <MapMarker longitude={start.lng} latitude={start.lat}>
            <MarkerContent>
              <HugeiconsIcon icon={MapPin} size={24} className="text-primary" />
              <MarkerLabel position="top">{start.name}</MarkerLabel>
            </MarkerContent>
          </MapMarker>
        )}

        <MapMarker longitude={end.lng} latitude={end.lat}>
          <MarkerContent>
            <HugeiconsIcon
              icon={MapPin}
              size={24}
              className="text-destructive"
            />
            <MarkerLabel position="bottom">{end.name}</MarkerLabel>
          </MarkerContent>
        </MapMarker>
        <MapControls
          position="top-right"
          showZoom
          showCompass
          showLocate
          showFullscreen
        />
      </Map>
      <div className="absolute top-2 right-14 z-10">
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value as StyleKey)}
          className="bg-background text-foreground rounded-md border px-2 py-1 text-sm shadow"
        >
          <option value="default">Default (Carto)</option>
          <option value="openstreetmap">OpenStreetMap</option>
          <option value="openstreetmap3d">OpenStreetMap 3D</option>
        </select>
      </div>
    </div>
  );
}
