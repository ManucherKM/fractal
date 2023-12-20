import { useState, type FC, type HTMLAttributes, useEffect } from 'react'
import classes from './Select.module.scss'
import clsx from 'clsx'
import { List } from '@/components'

export interface ISelect extends HTMLAttributes<HTMLDivElement> {
	options: string[]
	onChoose: (val: string) => void
	defaultValue: string
}

export const Select: FC<ISelect> = ({
	className,
	options,
	onChoose,
	defaultValue,
	...props
}) => {
	const [show, setShow] = useState(false)
	const [value, setValue] = useState(defaultValue)

	function openHandler() {
		setShow(true)
	}

	function chooseHandler(option: string) {
		setValue(option)
        setShow(false)
	}

	useEffect(() => {
		onChoose(value)
	}, [value])

	const styles = clsx([classes.root, className])
	return (
		<div className={styles} {...props}>
			<div onClick={openHandler} className={classes.wrapper__value}>
				<span>{value}</span>
			</div>
			{show && (
				<div className={classes.wrapper__options}>
					<List
						arr={options}
						callback={(option, idx) => (
							<div
								className={classes.option}
								onClick={() => chooseHandler(option)}
								key={idx}
							>
								{option}
							</div>
						)}
					/>
				</div>
			)}
		</div>
	)
}
