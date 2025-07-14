import React from "react";
import Container from "../../components/Container";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Target } from "lucide-react";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <Container>
      <div className="hero min-h-[70vh] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="hero-content text-center max-w-4xl">
          <div className="animate-slide-down">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Zap className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              Tools App
            </h1>
            <p className="text-xl md:text-2xl text-base-content/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Manage your tasks here !!!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/todolist"
                className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Target className="h-5 w-5" />
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#features"
                className="btn btn-outline btn-lg gap-2 hover:btn-primary transition-all duration-300"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
