import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContentMain } from './components/contentMain/index'
import { ContainerGlobal } from './style'
import { Sucess } from './components/contentSucess'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContainerGlobal>
      <ContentMain/>
    </ContainerGlobal>
  </React.StrictMode>,
)
