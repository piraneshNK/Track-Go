import { useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, XCircle, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent } from './components/ui/card';
import { Navigation } from './components/Navigation';
import { StatsSection } from './components/StatsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { RecentScans } from './components/RecentScans';
import { Footer } from './components/Footer';

type CheckResult = {
  status: 'safe' | 'warning' | 'danger';
  message: string;
  details?: string;
  threatTypes?: string[];
  riskScore?: number;
};

export default function App() {
  const [url, setUrl] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);

  // Enhanced mock URL checking function
  const checkUrl = async (urlToCheck: string): Promise<CheckResult> => {
    // Simulate API delay with realistic timing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Enhanced mock logic for demonstration
    const lowerUrl = urlToCheck.toLowerCase();
    
    if (lowerUrl.includes('phishing') || lowerUrl.includes('scam') || lowerUrl.includes('fake')) {
      return {
        status: 'warning',
        message: 'Unsafe: PHISHING',
        details: 'This website may be trying to steal your personal information through deceptive means.',
        threatTypes: ['Phishing', 'Social Engineering'],
        riskScore: 75
      };
    } else if (lowerUrl.includes('malware') || lowerUrl.includes('virus') || lowerUrl.includes('infected')) {
      return {
        status: 'danger',
        message: 'Unsafe: MALWARE',
        details: 'This website contains malicious software that could harm your device and steal sensitive data.',
        threatTypes: ['Malware', 'Trojan', 'Ransomware'],
        riskScore: 95
      };
    } else if (lowerUrl.startsWith('https://') && (lowerUrl.includes('google') || lowerUrl.includes('github') || lowerUrl.includes('microsoft') || lowerUrl.includes('apple'))) {
      return {
        status: 'safe',
        message: 'Safe website',
        details: 'This website appears to be legitimate and safe to visit. All security checks passed.',
        threatTypes: [],
        riskScore: 5
      };
    } else {
      return {
        status: 'warning',
        message: 'Unverified website',
        details: 'Unable to verify the complete safety of this website. Exercise caution when visiting.',
        threatTypes: ['Unknown'],
        riskScore: 45
      };
    }
  };

  const handleCheck = async () => {
    if (!url.trim()) return;
    
    setIsChecking(true);
    setResult(null);
    
    try {
      const checkResult = await checkUrl(url);
      setResult(checkResult);
    } catch (error) {
      setResult({
        status: 'danger',
        message: 'Error checking URL',
        details: 'Unable to check this URL due to a technical error. Please try again.',
        threatTypes: ['System Error'],
        riskScore: 100
      });
    } finally {
      setIsChecking(false);
    }
  };

  const getResultIcon = (status: string) => {
    switch (status) {
      case 'safe':
        return <CheckCircle className="w-8 h-8 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-8 h-8 text-yellow-400" />;
      case 'danger':
        return <XCircle className="w-8 h-8 text-red-400" />;
      default:
        return null;
    }
  };

  const getResultStyles = (status: string) => {
    switch (status) {
      case 'safe':
        return 'bg-green-500/20 border-green-500/30 backdrop-blur-xl';
      case 'warning':
        return 'bg-yellow-500/20 border-yellow-500/30 backdrop-blur-xl';
      case 'danger':
        return 'bg-red-500/20 border-red-500/30 backdrop-blur-xl';
      default:
        return 'bg-white/5 border-white/10 backdrop-blur-xl';
    }
  };

  const getRiskScoreColor = (score: number) => {
    if (score <= 30) return 'text-green-400';
    if (score <= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent_70%)]"></div>
      </div>

      <Navigation />

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section id="home" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-2xl backdrop-blur-xl border border-blue-500/30">
                  <Shield className="w-12 h-12 text-blue-400" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold text-white mb-2">LinkGuard</h1>
                  <div className="flex items-center gap-2 justify-center">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-medium">Professional Security Suite</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Advanced URL security analysis powered by AI and real-time threat intelligence. 
                Protect yourself from phishing, malware, and suspicious websites.
              </p>
            </div>

            {/* Main Checker Card */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-12">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Input Section */}
                  <div className="space-y-4">
                    <label htmlFor="url-input" className="block text-white font-medium">
                      Enter URL to analyze for security threats:
                    </label>
                    <div className="relative">
                      <Input
                        id="url-input"
                        type="url"
                        placeholder="https://example.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="h-16 text-lg bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-2xl backdrop-blur-xl"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleCheck();
                          }
                        }}
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Check Button */}
                  <Button
                    onClick={handleCheck}
                    disabled={!url.trim() || isChecking}
                    className="w-full h-16 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 border-0"
                  >
                    {isChecking ? (
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Analyzing Security...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6" />
                        <span>Analyze URL Security</span>
                      </div>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Result Card */}
            {result && (
              <Card className={`${getResultStyles(result.status)} shadow-2xl border-2 animate-in slide-in-from-bottom-4 duration-500`}>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 mt-1">
                        {getResultIcon(result.status)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {result.message}
                        </h3>
                        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                          {result.details}
                        </p>
                        
                        {/* URL Display */}
                        <div className="bg-black/30 rounded-xl p-4 mb-4 border border-white/10">
                          <div className="flex items-center gap-2 text-gray-300">
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">Analyzed URL:</span>
                          </div>
                          <div className="text-white break-all mt-1">{url}</div>
                        </div>

                        {/* Additional Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {result.riskScore !== undefined && (
                            <div className="bg-black/20 rounded-xl p-4 border border-white/10">
                              <div className="text-gray-300 text-sm font-medium mb-1">Risk Score</div>
                              <div className={`text-2xl font-bold ${getRiskScoreColor(result.riskScore)}`}>
                                {result.riskScore}/100
                              </div>
                            </div>
                          )}
                          
                          {result.threatTypes && result.threatTypes.length > 0 && (
                            <div className="bg-black/20 rounded-xl p-4 border border-white/10">
                              <div className="text-gray-300 text-sm font-medium mb-2">Threat Types</div>
                              <div className="flex flex-wrap gap-2">
                                {result.threatTypes.map((threat, index) => (
                                  <span key={index} className="px-2 py-1 bg-white/10 rounded-lg text-xs text-gray-300">
                                    {threat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        <StatsSection />
        <FeaturesSection />
        <RecentScans />
      </main>

      <Footer />
    </div>
  );
}