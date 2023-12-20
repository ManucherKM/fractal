import type { FC, HTMLAttributes } from 'react'
import classes from './Typography.module.scss'
import clsx from 'clsx'

export enum ETypographyVariants {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6',
}

export type ValidTypographyTypes = Omit<
	HTMLAttributes<HTMLHeadingElement>,
	'style'
>

export interface ITypography extends ValidTypographyTypes {
	variant?: `${ETypographyVariants}`
	size?: string
}

export const Typography: FC<ITypography> = ({
	children,
	className,
	variant: Tag = ETypographyVariants.h1,
	size,
	...props
}) => {
	const styles = clsx([classes.root, classes[Tag], className])
	return (
		<Tag className={styles} style={{ fontSize: size }} {...props}>
			{children}
		</Tag>
	)
}
