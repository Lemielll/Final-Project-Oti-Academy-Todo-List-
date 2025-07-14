import { ArrowRight } from "lucide-react";
import { CheckSquare } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";

function CTASection() {
  return (
    <Container>
      <div className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lets Use This Tool
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start with try the to-do list
            </p>
            <Link
              to="/todolist"
              className="btn btn-lg bg-white text-primary hover:bg-base-100 border-none shadow-xl hover:shadow-2xl transition-all duration-300 gap-2"
            >
              <CheckSquare className="h-6 w-6" />
              Start TodoList Here
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CTASection;
