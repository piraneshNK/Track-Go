import { CheckCircle, AlertTriangle, XCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function RecentScans() {
  const recentScans = [
    {
      url: 'https://google.com',
      status: 'safe',
      timestamp: '2 minutes ago',
      threats: 0
    },
    {
      url: 'https://suspicious-phishing-site.com',
      status: 'danger',
      timestamp: '5 minutes ago',
      threats: 3
    },
    {
      url: 'https://github.com',
      status: 'safe',
      timestamp: '8 minutes ago',
      threats: 0
    },
    {
      url: 'https://unknown-domain.net',
      status: 'warning',
      timestamp: '12 minutes ago',
      threats: 1
    },
    {
      url: 'https://microsoft.com',
      status: 'safe',
      timestamp: '15 minutes ago',
      threats: 0
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'danger':
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'safe':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Safe</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Warning</Badge>;
      case 'danger':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Dangerous</Badge>;
      default:
        return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">Unknown</Badge>;
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              Recent Security Scans
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentScans.map((scan, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 flex-1">
                    {getStatusIcon(scan.status)}
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium truncate">
                        {scan.url}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {scan.timestamp} • {scan.threats} threats detected
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(scan.status)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Showing recent scans from the community • Updated in real-time
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}