type UslugiPageProps = {
    params: {
      slug: string
    }
  }
  
  export default function UslugiPage({ params }: UslugiPageProps) {
    return <h1>Slug: {params.slug}</h1>
  }