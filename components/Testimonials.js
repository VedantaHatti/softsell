'use client';

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-white text-gray-800 overflow-hidden">
      {/* Denser, lighter teal grid background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="denseTealGrid"
            width="2" height="2" patternUnits="userSpaceOnUse"
          >
            <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#99f6e4" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#denseTealGrid)" />
      </svg>

      {/* Content */}
      <div className="relative container mx-auto text-center px-4 z-10">
        <h2 className="text-4xl font-semibold mb-12 text-teal-600">What Our Customers Say</h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Testimonial 1 */}
          <div className="bg-white border border-teal-200 shadow-lg p-8 rounded-lg">
            <p className="text-lg italic mb-4">
              “SoftSell made it incredibly easy to get value from unused licenses. The process was smooth and super fast.”
            </p>
            <div className="text-left">
              <p className="font-semibold text-teal-700">Alex Johnson</p>
              <p className="text-sm text-gray-600">IT Manager, NovaCorp</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-teal-200 shadow-lg p-8 rounded-lg">
            <p className="text-lg italic mb-4">
              “I was impressed by how quickly I got paid. I’ll definitely use SoftSell again for reselling software.”
            </p>
            <div className="text-left">
              <p className="font-semibold text-teal-700">Samantha Lee</p>
              <p className="text-sm text-gray-600">Operations Lead, Byteworks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
