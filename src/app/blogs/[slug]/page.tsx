import React from 'react';

interface SlugPageProps {
  params: { slug: string };
}

const SlugPage: React.FC<SlugPageProps> = ({ params }) => {
  console.log(params);

  return <div>SlugPage: {params.slug}</div>;
};

export default SlugPage;
