import type { FC, InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import classes from './InputMaster.module.scss'
import { Input, Tip, Typography } from '@/ui'

export interface IInputMaster extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	isShowTip?: boolean
	tip?: string
}

export const InputMaster: FC<IInputMaster> = ({
	className,
	name,
	isShowTip = false,
	tip,
	...props
}) => {
	const styles = clsx([classes.root, className])
	return (
		<div className={styles}>
			<Typography variant='h3' size='14px'>
				{name}
			</Typography>
			<Input {...props} />
			{isShowTip && <Tip>{tip}</Tip>}
		</div>
	)
}
