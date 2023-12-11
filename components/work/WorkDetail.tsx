import React from 'react';
import Layout from '../Layout';
import { PostProps } from '../../types/post';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

const WorkDetailPage = (props: PostProps) => {
  const {
    title,
    content,
    date,
    coverImage,
    sectionTitle,
    stack,
    year,
    client,
  } = props.post;

  console.log('content', content);

  return (
    <Layout title={`Preston Smith | ${title}`} navMethodList={{}}>
      <div
        style={{
          border: '1px solid black',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr',
          height: '100vh',
          marginLeft: 160,
        }}
      >
        <div
          style={{
            border: '1px solid red',
            gridColumn: '1 / 2',
            gridRow: '1 / 3',
          }}
        >
          <span>{title}</span>
          <h2>{sectionTitle}</h2>
          <Link href="/">Back</Link>
        </div>
        <div
          style={{
            border: '1px solid blue',
            gridColumn: '2 / 4',
            gridRow: '1 / 3',
          }}
        >
          carousel
          <CldImage src="cld-sample-5" width="100%" height="100%" />
        </div>
        <div
          style={{
            border: '1px solid green',
            gridColumn: '1 / 4',
            gridRow: '3 / 4',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          <ProjectDetails client={client} year={year} stack={stack} />
          <div
            style={{
              gridColumn: '2 / 4',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr ',
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const ProjectDetails = ({
  client,
  year,
  stack,
}: {
  client?: string;
  year?: string;
  stack?: string[];
}) => (
  <div>
    <h5>Client</h5>
    <p>{client}</p>
    <h5>Year</h5>
    <p>{year}</p>
    <h5>Stack</h5>
    {stack?.map((item, index) => (
      <p key={`${index}-${item}`}>{item}</p>
    ))}
  </div>
);

export default WorkDetailPage;
