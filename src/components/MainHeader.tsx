import styled from 'styled-components/macro';

import { Chip } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const MainHeader = () => {
  return (
    <Header>
      <Chip icon={<AttachMoneyIcon />} label="150 QUIZ" />
    </Header>
  );
};

export default MainHeader;

const Header = styled.div`
  width: 100%;
  background-color: red;
`;
