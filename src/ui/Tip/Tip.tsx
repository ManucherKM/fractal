import type { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import classes from './Tip.module.scss'

export interface ITip extends HTMLAttributes<HTMLSpanElement> {}

export const Tip: FC<ITip> = ({ children, className, ...props }) => {
	const styles = clsx([classes.root, className])
	return (
		<span className={styles} {...props}>
			{children}
		</span>
	)
}
