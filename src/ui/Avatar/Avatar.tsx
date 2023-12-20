import type { FC, ImgHTMLAttributes } from 'react'
import classes from './Avatar.module.scss'
import clsx from 'clsx'

export interface IAvatar extends ImgHTMLAttributes<HTMLImageElement> {}

export const Avatar: FC<IAvatar> = ({ className, ...props }) => {
	const styles = clsx([classes.root, className])
	return <img className={styles} src='' {...props} />
}
