const features = [
  { name: 'A Blood Type', description: 'A blood type is characterized by the presence of A antigens on the surface of red blood cells. Individuals with A blood type can donate blood to individuals with A and AB blood types, and can receive blood from individuals with A and O blood types.' },
  { name: 'B Blood Type', description: 'B blood type is characterized by the presence of B antigens on the surface of red blood cells. Individuals with B blood type can donate blood to individuals with B and AB blood types, and can receive blood from individuals with B and O blood types.' },
  { name: 'AB Blood Type', description: 'AB blood type is characterized by the presence of both A and B antigens on the surface of red blood cells. Individuals with AB blood type are universal recipients and can receive blood from individuals with any blood type (A, B, AB, or O). However, they can only donate blood to individuals with AB blood type.' },
  { name: 'O Blood Type', description: 'O blood type is characterized by the absence of both A and B antigens on the surface of red blood cells. Individuals with O blood type are universal donors and can donate blood to individuals with any blood type (A, B, AB, or O). However, they can only receive blood from individuals with O blood type.' },
];


export default function Example() {
  const headerimg1 = '/images/2 (1).jpg';
  const headerimg2 = '/images/2 (2).jpg';
  const headerimg3 = '/images/2 (3).jpg';
  const headerimg4 = '/images/2 (4).jpg';
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blood Types</h2>
          <p className="mt-4 text-gray-500">
            Learn more about different blood types and their characteristics.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={headerimg1}
            alt="A Blood Type"
            className="rounded-lg bg-gray-100"
          />
          <img
            src={headerimg2}
            alt="B Blood Type"
            className="rounded-lg bg-gray-100"
          />
          <img
            src={headerimg3}
            alt="AB Blood Type"
            className="rounded-lg bg-gray-100"
          />
          <img
            src={headerimg4}
            alt="O Blood Type"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
