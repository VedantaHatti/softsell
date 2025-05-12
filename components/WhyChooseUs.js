'use client';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Fast Valuations',
      description: 'We provide instant, automated software license valuations to help you sell quickly.',
      icon: 'https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/chart-square-bar.svg',
    },
    {
      title: 'Secure Transactions',
      description: 'Your transactions are protected with top-notch security protocols, ensuring a smooth, worry-free experience.',
      icon: 'https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/lock-closed.svg',
    },
    {
      title: 'Instant Payments',
      description: 'Once you accept our offer, you’ll receive your payment within minutes—no more waiting for weeks!',
      icon: 'https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/cash.svg',
    },
    {
      title: 'Hassle-Free Process',
      description: 'Skip the middleman and sell directly through our platform. Our easy-to-use interface makes the process seamless.',
      icon: 'https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/credit-card.svg',
    },
  ];

  return (
    <section className="py-20 bg-white text-teal-400">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-teal-500 flex items-center justify-center rounded-full">
                  <img src={feature.icon} alt={`${feature.title} icon`} className="w-8 h-8 text-black" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
