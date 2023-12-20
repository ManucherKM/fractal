import type { FC, HTMLAttributes } from 'react'
import classes from './Button.module.scss'
import clsx from 'clsx'

export enum EButtonVariant {
	outline = 'outline',
	active = 'active',
}

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
	variant?: `${EButtonVariant}`
}

export const Button: FC<IButton> = ({
	children,
	className,
	variant = EButtonVariant.active,
	...props
}) => {
	const styles = clsx([classes.root, classes[variant], className])
	return (
		<button className={styles} {...props}>
			{children}
		</button>
	)
}
