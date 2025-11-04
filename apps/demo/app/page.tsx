"use client";

import React, { useState } from "react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  ModalTrigger,
  ModalClose,
  Navbar,
  NavbarInner,
  NavbarBrand,
  NavbarNav,
  NavbarItem,
  Footer,
  FooterInner,
  FooterCol,
  FooterNote,
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  TextArea,
  Select,
  Checkbox,
  Switch,
  Avatar,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  DrawerTrigger,
  DrawerClose,
} from "@crest-code/ui";

export default function Page() {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sand-100">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        <header className="space-y-2">
          <h1 className="text-4xl font-display">Crest UI by Crest Code</h1>
          <p className="text-peak-950/70">
            A curated showcase of Crest UI components with practical, cohesive examples — by{" "}
            <a
              href="https://www.crestcodecreative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crest-blue-600 hover:underline"
            >
              Crest Code
            </a>.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Buttons & Inputs</CardTitle>
              <CardDescription>Core actions and form fields</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your name</label>
                <Input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox label="Subscribe" />
                <Switch checked={checked} onCheckedChange={setChecked} />
                <span className="text-sm text-peak-950/70">{checked ? "On" : "Off"}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Select defaultValue="crest">
                  <option value="crest">Crest</option>
                  <option value="peak">Peak</option>
                  <option value="sand">Sand</option>
                </Select>
                <TextArea placeholder="Tell us more..." />
              </div>
            </CardContent>
            <CardFooter>
              <Badge>Live</Badge>
              <Badge variant="outline">Preview</Badge>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feedback & Messaging</CardTitle>
              <CardDescription>Alerts and inline tips</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert variant="info">
                <AlertTitle>Heads up</AlertTitle>
                <AlertDescription>This is an informational message.</AlertDescription>
              </Alert>
              <Alert variant="success">
                <AlertTitle>Saved</AlertTitle>
                <AlertDescription>Your changes were saved successfully.</AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTitle>Check this</AlertTitle>
                <AlertDescription>Double-check your inputs before proceeding.</AlertDescription>
              </Alert>
              <div className="pt-1">
                <Tooltip>
                  <TooltipTrigger className="text-sm text-crest-blue-600 underline">Hover for a tip</TooltipTrigger>
                  <TooltipContent side="top">Tooltips keep interfaces tidy.</TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Organize related content</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="design">
                <TabsList>
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                  <TabsTrigger value="ship">Ship</TabsTrigger>
                </TabsList>
                <div className="mt-4">
                  <TabsContent value="design">
                    <p className="text-sm text-peak-950/80">Craft simple, elegant components.</p>
                  </TabsContent>
                  <TabsContent value="code">
                    <p className="text-sm text-peak-950/80">Composable APIs with sensible defaults.</p>
                  </TabsContent>
                  <TabsContent value="ship">
                    <p className="text-sm text-peak-950/80">Deliver with clarity and confidence.</p>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modal & Drawer</CardTitle>
              <CardDescription>Layered surfaces for tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Modal>
                <ModalTrigger className="rounded-xl bg-crest-blue-500 px-4 py-2 text-white">Open Modal</ModalTrigger>
                <ModalHeader>
                  <ModalTitle>Invite a collaborator</ModalTitle>
                  <ModalDescription>Send an invite with a quick note.</ModalDescription>
                </ModalHeader>
                <ModalBody className="space-y-3">
                  <Input placeholder="Email" type="email" />
                  <TextArea placeholder="Message" rows={3} />
                </ModalBody>
                <ModalFooter>
                  <ModalClose className="rounded-xl px-4 py-2 border border-sand-300">Cancel</ModalClose>
                  <Button>Send Invite</Button>
                </ModalFooter>
              </Modal>

              <Drawer side="right">
                <DrawerTrigger className="rounded-xl border border-sand-300 px-4 py-2">Open Drawer</DrawerTrigger>
                <DrawerHeader>
                  <DrawerTitle>Quick settings</DrawerTitle>
                  <DrawerDescription>Tune preferences on the fly.</DrawerDescription>
                </DrawerHeader>
                <DrawerBody className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Enable focus mode</span>
                    <Switch />
                  </div>
                  <Select defaultValue="light">
                    <option value="light">Light</option>
                    <option value="system">System</option>
                  </Select>
                </DrawerBody>
                <DrawerFooter>
                  <DrawerClose className="rounded-xl px-4 py-2 border border-sand-300">Close</DrawerClose>
                  <Button variant="secondary">Save</Button>
                </DrawerFooter>
              </Drawer>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
              <CardDescription>Breadcrumbs & Navbar patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Navbar elevated>
                <NavbarInner>
                  <NavbarBrand>Crest</NavbarBrand>
                  <NavbarNav>
                    <NavbarItem>Products</NavbarItem>
                    <NavbarItem>Docs</NavbarItem>
                    <NavbarItem>Contact</NavbarItem>
                  </NavbarNav>
                </NavbarInner>
              </Navbar>
              <div className="pt-4">
                <Breadcrumbs>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" current>
                      Showcase
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumbs>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Avatars & Badges</CardTitle>
              <CardDescription>Brand presence and status</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Avatar name="Ava Crest" />
              <Avatar>CC</Avatar>
              <Badge variant="success">New</Badge>
              <Badge variant="warning">Beta</Badge>
              <Badge variant="danger">Deprecated</Badge>
            </CardContent>
          </Card>
        </section>

        <section>
          <Footer>
            <FooterInner>
              <FooterCol>
                <h4 className="text-sm font-semibold">Crest Code</h4>
                <p className="text-sm text-peak-950/70">Design. Code. Create.</p>
              </FooterCol>
              <FooterCol>
                <h4 className="text-sm font-semibold">Resources</h4>
                <ul className="text-sm text-peak-950/80 space-y-1">
                  <li>Docs</li>
                  <li>Components</li>
                  <li>Tokens</li>
                </ul>
              </FooterCol>
              <FooterCol>
                <h4 className="text-sm font-semibold">Company</h4>
                <ul className="text-sm text-peak-950/80 space-y-1">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </FooterCol>
              <FooterCol>
                <h4 className="text-sm font-semibold">Legal</h4>
                <ul className="text-sm text-peak-950/80 space-y-1">
                  <li>Privacy</li>
                  <li>Terms</li>
                </ul>
              </FooterCol>
            </FooterInner>
            <div className="mx-auto max-w-6xl px-4 pb-8">
              <FooterNote>© {new Date().getFullYear()} Crest Code Creative</FooterNote>
            </div>
          </Footer>
        </section>
      </div>
    </main>
  );
}
