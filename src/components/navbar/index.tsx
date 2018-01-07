import React from 'react';
import classnames from 'classnames';

interface NavbarProps {
    prefixCls?: string;
    className?: string;
    mode?: 'dark' | 'light';
    icon?: React.ReactNode;
    leftContent?: any;
    rightContent?: any;
    onLeftClick?: () => void;
}

export default class Navbar extends React.Component<NavbarProps, any> {
  static defaultProps = {
    prefixCls: 'ej-navbar',
    mode: 'dark',
    onLeftClick: () => {},
  };

  render() {
    const {
      prefixCls, className, children, mode, icon, onLeftClick, leftContent, rightContent,
      ...restProps,
    } = this.props;

    return (
      <div {...restProps} className={classnames(className, prefixCls, `${prefixCls}--${mode}`)}>
        <div className={`${prefixCls}__left`} role="button" onClick={onLeftClick}>
          {icon ? <span className={`${prefixCls}__left-icon`} aria-hidden="true">{icon}</span> : null}
          {leftContent}
        </div>
        <div className={`${prefixCls}__title`}>{children}</div>
        <div className={`${prefixCls}__right`}>{rightContent}</div>
      </div>
    );
  }
}
