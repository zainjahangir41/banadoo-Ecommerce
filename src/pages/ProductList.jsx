import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from './../components/Announcement';
import Products from "../components/Products"
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer"
import { mobile } from './../Responsive';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
          <Navbar />
          <Announcement />
          <Title>Materials-1</Title>
          <FilterContainer>
              <Filter><FilterText>Filter Product</FilterText>
              <Select>
              <Option disabled selected>Color</Option>
              <Option>Red</Option>
              <Option>White</Option>
              <Option>Blue</Option>
              <Option>Black</Option>
              </Select>
              <Select>
              <Option disabled selected>Size</Option>
              <Option>M-1</Option>
              <Option>M-2</Option>
              <Option>M-3</Option>
              <Option>M-4</Option>
              </Select>
              </Filter>
              <Filter><FilterText>Sort Product</FilterText>
              <Select>
              <Option disabled selected>Newest</Option>
              <Option>P-1</Option>
              <Option>P-2</Option>
              <Option>P-3</Option>
              <Option>P-4</Option>
              </Select>
              </Filter>
          </FilterContainer>
          <Products/>
          <Newsletter/>
          <Footer/>
    </Container>
  )
}

export default ProductList
