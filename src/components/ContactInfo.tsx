import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-md mx-auto md:mx-0">
      <Button variant="outline" className="card-hover w-full justify-start" asChild>
        <a href="mailto:idan226688@gmail.com" className="flex items-center gap-2">
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">idan226688@gmail.com</span>
        </a>
      </Button>
      <Button variant="outline" className="card-hover w-full justify-start" asChild>
        <a href="tel:+972504009634" className="flex items-center gap-2">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">+972-50-4009634</span>
        </a>
      </Button>
      <Button variant="outline" className="card-hover w-full justify-start" asChild>
        <a href="https://github.com/idan226688" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <Github className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">GitHub</span>
        </a>
      </Button>
      <Button variant="outline" className="card-hover w-full justify-start" asChild>
        <a href="https://www.linkedin.com/in/idan-hadad-8793a2249/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <Linkedin className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">LinkedIn</span>
        </a>
      </Button>
    </div>
  );
};
