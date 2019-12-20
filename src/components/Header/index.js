import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Notifications from '~/components/Notifications';
import { Container, Content, Profile } from './styles';
import defaultAvatar from '~/assets/default-avatar.png';

import logo from '~/assets/logo-purple.svg';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src={profile.avatar.url || defaultAvatar} alt="User Avatar" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
