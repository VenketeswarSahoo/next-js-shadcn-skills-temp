"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { List, Profile, Settings, Trash } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BluetoothIcon,
  MoreHorizontalIcon,
  SettingsIcon,
  StarIcon,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import * as z from "zod";
import { toast } from "sonner";
import { useForm } from "@tanstack/react-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
const initialProps = {
  pathLength: 0,
  opacity: 0,
} as const;

const animateProps = {
  pathLength: 1,
  opacity: 1,
} as const;

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

const Home = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  React.useEffect(() => {
    setDate(new Date());
  }, []);

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      });
    },
  });

  return (
    <div className="p-8 flex flex-col gap-12 max-w-4xl mx-auto">
      <AppleHelloEnglishEffect
        className="text-black h-24"
        onAnimationComplete={() => {}}
      />
      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Modals & General
        </h2>
        <div className="flex flex-wrap gap-4">
          <AlertDialog>
            <AlertDialogTrigger render={<Button>Open Alert Dialog</Button>} />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <BluetoothIcon />
                </AlertDialogMedia>
                <AlertDialogTitle>Pair with this device?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will allow the device to connect and share data with your
                  current session.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Connect</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Dialog>
            <DialogTrigger
              render={<Button variant="outline">Open Dialog</Button>}
            />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Premium Dialog</DialogTitle>
                <DialogDescription>
                  Notice the custom ease-out-expo curve and the asymmetric exit
                  timing.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
                <DrawerDescription>
                  This drawer uses Vaul's native spring physics for the content.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Action</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Sheet>
            <SheetTrigger
              render={<Button variant="outline">Open Sheet</Button>}
            />
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="flex-1 p-6">
                <div className="h-full rounded-2xl border-2 border-dashed border-muted flex items-center justify-center text-muted-foreground">
                  Content Area
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button>Click</Button>
          <Spinner />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Floating Elements
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size="icon">
                  <MoreHorizontalIcon />
                </Button>
              }
            />
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel> Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <HugeiconsIcon icon={Profile} /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={List} /> Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={Settings} /> Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <HugeiconsIcon icon={Trash} /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Select defaultValue="premium">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="premium">Premium Motion</SelectItem>
              <SelectItem value="extreme">Extreme Polish</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger
              render={
                <Button variant="ghost" size="icon">
                  <SettingsIcon />
                </Button>
              }
            />
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Accordion & Disclosure
        </h2>
        <Accordion
          type="single"
          className="w-full max-w-md bg-card rounded-xl border overflow-hidden"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>What makes this premium?</AccordionTrigger>
            <AccordionContent>
              We use custom CSS keyframes for height transitions combined with
              Emil's expo easing for a smooth, natural-feeling reveal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it performant?</AccordionTrigger>
            <AccordionContent>
              Yes. By using CSS transitions for the chevron rotation and
              optimized height keyframes, the main thread remains free for other
              interactions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Inputs & States
        </h2>
        <div className="flex flex-col gap-4">
          <Field orientation="horizontal" className="w-auto">
            <Checkbox id="badge-1" defaultChecked />
            <div className="flex items-center gap-2">
              <FieldLabel htmlFor="badge-1">AI-powered suggestions</FieldLabel>
              <Badge className="h-4.5 rounded-full px-1.5 text-[10px] tracking-wider uppercase">
                New
              </Badge>
            </div>
          </Field>
          <Field orientation="horizontal" className="w-auto">
            <Checkbox id="badge-2" />
            <div className="flex items-center gap-2">
              <FieldLabel htmlFor="badge-2">Beta feature access</FieldLabel>
              <Badge
                variant="secondary"
                className="h-4.5 rounded-full px-1.5 text-[10px] tracking-wider uppercase"
              >
                Beta
              </Badge>
            </div>
          </Field>
        </div>
        <div className="flex gap-4 mt-4">
          <Badge>Default Badge</Badge>
          <Badge variant="outline">Outline Badge</Badge>
          <Badge variant="destructive">Destructive Badge</Badge>
          <Badge variant="secondary">Secondary Badge</Badge>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Popover>
            <PopoverTrigger
              render={
                <Button variant="outline">
                  {date
                    ? date.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : "Pick a date"}
                </Button>
              }
            />
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                captionLayout="dropdown"
                selected={date}
                onSelect={setDate}
                // disabled={(date) =>
                //   date < new Date(Date.now() - 1000 * 60 * 60 * 24)
                // }
              />
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Small Interactions
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <div className="flex items-center gap-2">
                      <Switch id="airplane-mode" />
                      <FieldLabel htmlFor="airplane-mode">
                        Airplane Mode
                      </FieldLabel>
                    </div>
                  }
                />
                <TooltipContent>Toggle system-wide connectivity</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Toggle aria-label="Toggle favorite" className="rounded-full">
              <StarIcon className="size-4" />
            </Toggle>
          </div>

          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Visual Effects
        </h2>
        <Card className="group/card relative h-96 w-full max-w-sm">
          <Image
            src="https://images.unsplash.com/photo-1774347180942-a30dc0669d61?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent transition-all duration-500 group-hover/card:h-2/3" />
          <div className="relative flex h-full flex-col justify-end p-8">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Image Scale Effect
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              This card features a smooth image scaling effect and background
              overlay on hover, using hardware-accelerated transforms.
            </p>
          </div>
        </Card>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Form
        </h2>
        <Card className="w-full sm:max-w-sm">
          <CardHeader>
            <CardTitle>Bug Report</CardTitle>
            <CardDescription>
              Help us improve by reporting bugs you encounter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              id="bug-report-form"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              <FieldGroup>
                <form.Field
                  name="title"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name} required>
                          Bug Title
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="Login button not working on mobile"
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
                <form.Field
                  name="description"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name} required>
                          Description
                        </FieldLabel>
                        <InputGroup>
                          <InputGroupTextarea
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="I'm having an issue with the login button on mobile."
                            rows={6}
                            className="min-h-24 resize-none"
                            aria-invalid={isInvalid}
                          />
                          <InputGroupAddon align="block-end">
                            <InputGroupText className="tabular-nums">
                              {field.state.value.length}/100 characters
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                        <FieldDescription>
                          Include steps to reproduce, expected behavior, and
                          what actually happened.
                        </FieldDescription>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter>
            <Field orientation="horizontal">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button type="submit" form="bug-report-form">
                Submit
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default Home;

function AppleHelloEnglishEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20", className)}
      exit={{ opacity: 0 }}
      fill="none"
      initial={{ opacity: 1 }}
      stroke="currentColor"
      strokeWidth="14.8883"
      transition={{ duration: 0.5 }}
      viewBox="0 0 638 200"
      xmlns="http://www.w3.org/2000/svg"
      {...(props as any)}
    >
      <title>hello</title>

      {/* h1 */}
      <motion.path
        animate={animateProps}
        d="M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356"
        initial={initialProps}
        style={{ strokeLinecap: "round" }}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          opacity: { duration: 0.4 },
        }}
      />

      {/* h2, ello */}
      <motion.path
        animate={animateProps}
        d="M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186"
        initial={initialProps}
        onAnimationComplete={onAnimationComplete}
        style={{ strokeLinecap: "round" }}
        transition={{
          duration: calc(2.8),
          ease: "easeInOut",
          delay: calc(0.7),
          opacity: { duration: 0.7, delay: calc(0.7) },
        }}
      />
    </motion.svg>
  );
}
