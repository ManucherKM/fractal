import type { FC, InputHTMLAttributes } from 'react'
import classes from './Input.module.scss'
import clsx from 'clsx'

export type ValidInputTypes = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type'
>

export interface IInput extends ValidInputTypes {}

export const Input: FC<IInput> = ({ className, ...props }) => {
	const styles = clsx([classes.root, className])
	return <input className={styles} type='text' {...props} />
}
