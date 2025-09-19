import { Shield, Zap, Lock, Globe, Database, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Protection',
      description: 'Instant URL analysis using advanced threat detection algorithms and machine learning.',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get security results in milliseconds with our optimized scanning infrastructure.',
      color: 'text-yellow-400'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your URLs are analyzed securely without storing or sharing your browsing data.',
      color: 'text-green-400'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Comprehensive protection against threats from around the world, updated continuously.',
      color: 'text-purple-400'
    },
    {
      icon: Database,
      title: 'Threat Intelligence',
      description: 'Powered by multiple security databases and real-time threat intelligence feeds.',
      color: 'text-red-400'
    },
    {
      icon: Users,
      title: 'Trusted by Millions',
      description: 'Join millions of users who trust LinkGuard for their online security needs.',
      color: 'text-cyan-400'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Advanced Security Features
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            LinkGuard combines cutting-edge technology with comprehensive threat intelligence to provide you with the most reliable URL security checking available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-black/20 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}