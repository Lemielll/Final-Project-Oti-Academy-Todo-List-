import React from "react";
import Container from "../../components/Container";
import { Heart } from "lucide-react";

function HeaderHealth() {
  return (
    <Container>
      <div className="text-center mb-8 animate-slide-down mt-14">
        <h1 className="text-4xl font-bold text-base-content mb-2 flex items-center justify-center gap-3">
          <Heart className="h-10 w-10 text-error" />
          Health Tracker
        </h1>
        <p className="text-base-content/70 text-lg">
          Knowing and keeping your health in prime conditions
        </p>
      </div>
    </Container>
  );
}

export default HeaderHealth;
