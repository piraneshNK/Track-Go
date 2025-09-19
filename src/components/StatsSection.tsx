import { Shield, Eye, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function StatsSection() {
  const stats = [
    {
      icon: Shield,
      label: 'URLs Scanned',
      value: '2.4M+',
      subtext: 'This month',
      color: 'text-blue-400'
    },
    {
      icon: AlertTriangle,
      label: 'Threats Detected',
      value: '15.2K',
      subtext: 'Blocked this week',
      color: 'text-red-400'
    },
    {
      icon: CheckCircle,
      label: 'Safe URLs',
      value: '98.7%',
      subtext: 'Verified clean',
      color: 'text-green-400'
    },
    {
      icon: Eye,
      label: 'Active Users',
      value: '450K+',
      subtext: 'Protected daily',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="stats" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protecting Users Worldwide
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our advanced security algorithms scan millions of URLs daily to keep you safe from phishing, malware, and other online threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-black/20 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.subtext}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}