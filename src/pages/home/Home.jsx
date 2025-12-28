import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/Navbar";
import "./Home.css";
function Home() {
  return (
    <>
      <MyNavbar />
      <Container>
        <h1 style={{ paddingTop: "20px" }}>لیست مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
