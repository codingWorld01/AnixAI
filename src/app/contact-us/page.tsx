import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 pb-16 bg-background">
        <div className="container px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">build something amazing</span> together
            </h1>
            <p className="text-muted-foreground text-lg">
              Get in touch with our experts to discuss how Markovate can help transform your business with innovative Generative AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Card className="border-border/40 bg-card/60 overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name*
                        </label>
                        <Input
                          id="first-name"
                          placeholder="John"
                          className="bg-background/50 border-border/60"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name*
                        </label>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          className="bg-background/50 border-border/60"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email*
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="bg-background/50 border-border/60"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        className="bg-background/50 border-border/60"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company*
                      </label>
                      <Input
                        id="company"
                        placeholder="Acme Inc."
                        className="bg-background/50 border-border/60"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message*
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or inquiry..."
                        className="min-h-[120px] bg-background/50 border-border/60"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient rounded-full text-white hover:opacity-90">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="border-border/40 bg-card/60">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">San Francisco, USA</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        100 Pine Street, Suite 1250<br />
                        San Francisco, CA 94111
                      </p>
                      <p className="text-sm text-markovate-blue">+1 (415) 555-1234</p>
                    </CardContent>
                  </Card>
                  <Card className="border-border/40 bg-card/60">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">London, UK</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        5 Merchant Square<br />
                        London, W2 1AY
                      </p>
                      <p className="text-sm text-markovate-blue">+44 20 1234 5678</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                <div className="grid grid-cols-1 gap-6">
                  <Card className="border-border/40 bg-card/60">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-markovate-blue/10 text-markovate-blue mr-3">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold">Phone Support</h3>
                          <p className="text-sm text-muted-foreground">Monday - Friday, 9am - 6pm EST</p>
                        </div>
                      </div>
                      <p className="text-markovate-blue font-medium">+1 (800) 555-9876</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/40 bg-card/60">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-markovate-blue/10 text-markovate-blue mr-3">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold">Email Us</h3>
                          <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                        </div>
                      </div>
                      <p className="text-markovate-blue font-medium">info@markovate.com</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
