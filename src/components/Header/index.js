import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import { Container, Content, Profile } from './styles';
import defaultAvatar from '~/assets/default-avatar.png';

import logo from '~/assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Daniel Garcia</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src={defaultAvatar} alt="Daniel Garcia" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
