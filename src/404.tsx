import styled from 'styled-components'

const NotFoundWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    color: black;
    b {
      font-size: 42px;
    }
  }
`

const NotFound = () => (
  <NotFoundWrapper>
    <p>
      <b>404</b>
      <br />
      Página não encontrada.
    </p>
  </NotFoundWrapper>
)

export default NotFound
