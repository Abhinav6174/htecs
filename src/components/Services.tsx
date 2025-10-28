import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calculator, BookOpen, Shield, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Advisory",
    description: "Strategic guidance to help your business grow and navigate complex challenges with confidence.",
  },
  {
    icon: Calculator,
    title: "Taxation Services",
    description: "Comprehensive tax planning and compliance solutions to optimize your tax position.",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping & Accounting",
    description: "Accurate financial records and reports to keep your business running smoothly.",
  },
  {
    icon: Shield,
    title: "Auditing & Assurance",
    description: "Independent verification and risk assessment to ensure financial integrity.",
  },
  {
    icon: TrendingUp,
    title: "IFRS Advisory",
    description: "Expert guidance on international financial reporting standards and compliance.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full rounded-3xl border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
        <CardHeader>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <service.icon className="h-7 w-7 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
