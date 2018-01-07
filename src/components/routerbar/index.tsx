import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

interface RouterbarItemProps {
    icon?: any;
    title: string;
    to: string;
    prefixCls?: string;
}

class Item extends React.Component<RouterbarItemProps, any> {
    static defaultProps = {
        prefixCls: 'ej-routerbar__item'
    };

    getClass(url, prefixCls) {
        return url === window.location.pathname ? `${prefixCls} ${prefixCls}--active` : `${prefixCls}`;
    }

    renderIcon = () => {
        const { icon, title, prefixCls } = this.props;
        const iconDom = React.isValidElement(icon) ? (
            icon
        ) : (
            <img
                className={`${prefixCls}-image`}
                src={icon.uri || icon}
                alt={title}
            />
        );

        return iconDom;
    };

    render() {
        const { title, to, prefixCls } = this.props;
        return (
            <Link className={this.getClass(to, prefixCls)} to={to}>
                <div className={`${prefixCls}-icon`}>{this.renderIcon()}</div>
                <div className={`${prefixCls}-title`}>{title}</div>
            </Link>
        );
    }
}

interface RouterbarProps {
    prefixCls?: string;
    className?: string;
    style?: any;
    mode?: 'dark' | 'light';
}

export default class Routerbar extends React.Component<RouterbarProps, any> {
    static defaultProps = {
        prefixCls: 'ej-routerbar',
        mode: 'light'
    };

    static Item = Item;

    getItems(){
        return React.Children.map(this.props.children, (c: any) => {
            return {
                ...c.props
            };
        });
    }

    render() {
        const {
            prefixCls,
            className,
            style,
            children,
            mode,
            ...restProps
        } = this.props;

        return (
            <div
                className={classnames(
                    className,
                    prefixCls,
                    `${prefixCls}--${mode}`
                )}
                style={style}
                {...restProps}
            >
                {children}
            </div>
        );
    }
}
