import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../components/Common/Breadcrumb'

const KnowledgeBaseIndex = () => {
  return (
   <>
       <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="" breadcrumbItem="Knowledge Base" />
          </Container>
          </div>
   </>
  )
}

export default KnowledgeBaseIndex