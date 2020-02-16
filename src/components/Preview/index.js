/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { Col } from 'react-grid-system'
import Icon from 'react-icons-kit'
import { plus } from 'react-icons-kit/feather/plus'
import classnames from 'classnames'

import { Colors } from '../../utils/consts'
import ActionHeader from '../ActionHeader'
import TextEditor from '../TextEditor'
import PropterIcon from '../common/Icon'
import styles from './Preview.module.scss'

/**
* @author zilahir
* @function Preview
* */

const Preview = () => {
	// const store = useStore()
	// const [segments, setSegments] = useState([])
	const [activeButton, setActiveButton] = useState(1)
	return (
		<>
			<Col lg={6}>
				<ActionHeader />
				<div className={styles.previewContainer}>
					<div className={styles.tabContainer}>
						<button
							className={classnames(
								styles.tabButton,
								activeButton === 1 ? styles.tabButtonActive : null,
							)}
							type="button"
							onClick={() => setActiveButton(1)}
						>
							Text
						</button>
						<button
							className={classnames(
								styles.tabButton,
								activeButton === 2 ? styles.tabButtonActive : null,
							)}
							type="button"
							onClick={() => setActiveButton(2)}
						>
							Segments
						</button>
					</div>
					{
						activeButton === 2
							? (
								<div className={styles.innerContainer}>
									<div className={styles.segmentsHeader}>
										<button
											type="button"
											onClick={() => null}
											className={styles.button}
										>
											<div className={styles.addIconContainer}>
												<PropterIcon
													color={Colors.gray4}
													icon={
														<Icon siz="1em" icon={plus} />
													}
												/>
											</div>
											<p>
												Add segment
											</p>
										</button>
										<button
											type="button"
											className={styles.button}
											onClick={() => null}
										>
											Clear all
										</button>
									</div>
								</div>
							)
							: activeButton === 1
								? (
									<TextEditor />
								)
								: null
					}
				</div>
			</Col>
		</>
	)
}

export default Preview
