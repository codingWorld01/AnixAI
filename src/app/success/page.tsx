"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Lottie from "lottie-react";
import successAnimation from "../../../public/animations/success-animation.json";

export default function SuccessPage() {
    return (
        <section className="pb-16 bg-background min-h-screen flex items-center justify-center">
            <div className="container px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <Card className="border-border/40 bg-card/60 overflow-hidden">
                        <CardContent className="p-8">

                            {/* Lottie Animation */}
                            <div className="flex justify-center">
                                <Lottie
                                    animationData={successAnimation}
                                    loop={false}
                                    style={{ width: 300, height: 300 }}
                                />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-600">
                                Thank You!
                            </h1>
                            <p className="text-lg text-foreground mb-6">
                                Your message has been sent successfully. Our team will get back to you shortly.
                            </p>
                            <p className="text-sm text-muted-foreground mb-8">
                                We appreciate your interest in AnixAI. If you have any urgent queries, feel free to reach out to us at{" "}
                                <a href="mailto:info@anixai.io" className="text-anixai-blue hover:underline">
                                    info@anixai.io
                                </a>.
                            </p>


                            <Button asChild className="bg-gradient rounded-full text-white hover:opacity-90">
                                <Link href="/contact-us">
                                    Back to Contact Page
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}