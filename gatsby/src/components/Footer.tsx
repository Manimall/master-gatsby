import styled from 'styled-components';

const FooterStyles = styled.footer`
  text-align: center;
`;

const Footer: React.FC = () => (
  <FooterStyles>
    <p>
      &copy; Slick's Slices {new Date().getFullYear()}
    </p>
  </FooterStyles>
);

export default Footer;
