import React, { useState } from 'react';
import { DrawerContainer} from '../styled/drawer';
import { PrimaryButton } from '../../../routes/Home/styled/home';
import { SecondaryButton } from '../../SecondaryButton/components/SecondaryButton';

export function Drawer({value, handleChange, children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <PrimaryButton onClick={toggleDrawer}>Filtros</PrimaryButton>
      <DrawerContainer open={isOpen}>
        {children}
        <SecondaryButton title='Fechar' onClick={toggleDrawer} />
      </DrawerContainer>
    </div>
  );
}
