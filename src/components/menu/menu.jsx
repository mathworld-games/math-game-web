import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import store from '../../store/store';

import '../../style/app.css';
import './menu.css';

class Menu extends Component {
  isLoggedIn = () => store.getState().currentUser;

  isGameFinished = () => store.getState().currentUser.currentSession.gamePassed;

  handleClick = e => {
    if (!this.isLoggedIn()) {
      e.preventDefault();
    } else {
      if (e.target.id === 'play-link') {
        if (this.isGameFinished()) {
          e.preventDefault();
        }
      }
    }
  };

  linkClass = () => (this.isLoggedIn() ? 'available' : 'not-available');

  playGameClass = () =>
    this.isLoggedIn() && !this.isGameFinished() ? 'available' : 'not-available';

  render() {
    return (
      <div className="game-wrapper">
        <div className="menu-screen">
          <ul>
            <li>
              <Link
                to="/stages"
                id="play-link"
                className={this.playGameClass()}
                onClick={this.handleClick}>
                Играть
              </Link>
            </li>
            <li>
              <Link className="available" to="/register">
                Регистрация
              </Link>
            </li>
            <li>
              <Link className="available" to="/player">
                Войти
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={this.linkClass()}
                onClick={this.handleClick}>
                Настройки
              </Link>
            </li>
            <li>
              <Link
                to="/score"
                className={this.linkClass()}
                onClick={this.handleClick}>
                Полка
              </Link>
            </li>
            <li>
              <Link
                to="/shelve"
                className={this.linkClass()}
                onClick={this.handleClick}>
                Новая полка
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
