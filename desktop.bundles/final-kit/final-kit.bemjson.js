module.exports = {
	block: 'page',
	title: 'Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' }},
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' }},
		{ elem: 'css', url: 'final-kit.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'final-kit.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-default', space: 'default', breakpoint: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		},

		
	],
	content: [
		{
			block: 'tpl-layout',
			mix: { block: 'decorator',mods: { 'space-v': 'xxxxxxl' }},
			attrs: {
				'style': 'background: rgba(0,0,0,0.04);'
			},
			content: [

				{ block: 'theme', mods: { color: 'mts-default' }},
				{ block: 'theme', mods: { color: 'mts-inverse' }},
				{ block: 'theme', mods: { color: 'mts-brand' }},

				{ block: 'theme', mods: { color: 'megafon-default' }},
				{ block: 'theme', mods: { color: 'megafon-inverse' }},
				{ block: 'theme', mods: { color: 'megafon-brand' }},

				{ block: 'theme', mods: { color: 'whitepaper-default' }},
				{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
				{ block: 'theme', mods: { color: 'whitepaper-brand' }},


				{ block: 'component', mods: { megafon: 'default' }},
				{ block: 'component', mods: { megafon: 'inverse' }},
				{ block: 'component', mods: { megafon: 'brand' }},
				
				{ block: 'component', mods: { mts: 'default' }},
				{ block: 'component', mods: { mts: 'inverse' }},
				{ block: 'component', mods: { mts: 'brand' }},

				{ block: 'component', mods: { whitepaper: 'default' }},
				{ block: 'component', mods: { whitepaper: 'brand' }},
				{ block: 'component', mods: { whitepaper: 'inverse' }},
				
				{
					elem: 'content',
					content: [

						{
							elem: 'container',
							elemMods: { 'size': 'm', 'align': 'center' },
							content: [

								/* Heading */
								{
									elem: 'section',
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '12', 'm-columns': '12' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '12', 'm-col': '6' },
													content: [
														{
															block: 'text',
															mods: { size: 'xxxxl', weight: 'bold' },
															attrs: { 
																'style': 'font-size: 72px;'
															},
															content: 'Starter KIT'
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '12', 'm-col': '6' },
													content: [
														{
															block: 'colorizer',
															content: [
																{
																	elem: 'color',
																	elemMods: { view: 'whitepaper', state: 'active' }
																},
																{
																	elem: 'color',
																	elemMods: { view: 'megafon' }
																},
																{
																	elem: 'color',
																	elemMods: { view: 'mts' }
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Heading */

								/* Тариф */
								{
									elem: 'section',
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'tariff',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-default' }},
																{ block: 'component', mods: { whitepaper: 'default' }},
																{ block: 'pt-card' }
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' }},
																	content: [
																		{
																			elem: 'type',
																			mix: [ { block: 'text', mods: { view: 'primary', size: 'xxl', weight: 'bold', align: 'center' }}, { block: 'decorator', mods: { 'indent-b': 'xxs' } } ],
																			content: 'Standard'
																		},
																		{
																			elem: 'type',
																			mix: [ { block: 'text', mods: { view: 'primary', size: 'm', align: 'center' }}, { block: 'decorator', mods: { 'indent-b': 'xl' } } ],
																			content: 'For large companies'
																		},
																		{
																			elem: 'sale',
																			mix: [{ block: 'text', mods: { view: 'primary', align: 'center', weight: 'bold' }}, { block: 'decorator', mods: { 'indent-b': 'l' } }],
																			content: '$89'
																		},
																		{
																			elem: 'assets',
																			mix: { block: 'decorator', mods: { 'space-h': 'm' }},
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'part', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', weight: 'light' },
																											content: '50 presentations/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'wait-2', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', weight: 'light' },
																											content: '5 house of free support'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'statistic', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', weight: 'light',  },
																											content: '10 campaigns/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' }},
																	content: [
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l', width: 'available', view: 'action' },
																			text: 'Choose month plan'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'tariff',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																{ block: 'component', mods: { whitepaper: 'brand' }},
																{ block: 'pt-card' }
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' }},
																	content: [
																		{
																			elem: 'type',
																			mix: [ 
																				{ block: 'text', mods: { view: 'primary', size: 'xxl', weight: 'bold', align: 'center' }}, 
																				{ block: 'decorator', mods: { 'indent-b': 'xxs' }} 
																			],
																			content: 'Standard'
																		},
																		{
																			elem: 'type',
																			mix: [ { block: 'text', mods: { view: 'primary', size: 'm', align: 'center' }}, { block: 'decorator', mods: { 'indent-b': 'xl' } } ],
																			content: 'For large companies'
																		},
																		{
																			elem: 'sale',
																			mix: [{ block: 'text', mods: { view: 'primary', align: 'center', weight: 'bold' }}, { block: 'decorator', mods: { 'indent-b': 'l' } }],
																			content: '$89'
																		},
																		{
																			elem: 'assets',
																			mix: { block: 'decorator', mods: { 'space-h': 'm' }},
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'part', size: 's', view: 'brand', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', weight: 'light' },
																											content: '50 presentations/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'wait-2', size: 's', view: 'brand', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', weight: 'light' },
																											content: '5 house of free support'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'statistic', size: 's', view: 'brand', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', weight: 'light',  },
																											content: '10 campaigns/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' }},
																	content: [
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l', width: 'available', view: 'action' },
																			text: 'Choose month plan'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'tariff',
															mods: { view: 'image' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card' }
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' }},
																	content: [
																		{
																			elem: 'type',
																			mix: [ { block: 'text', mods: { view: 'primary', size: 'xxl', weight: 'bold', align: 'center' }}, { block: 'decorator', mods: { 'indent-b': 'xxs' } } ],
																			content: 'Standard'
																		},
																		{
																			elem: 'type',
																			mix: [ { block: 'text', mods: { view: 'primary', size: 'm', align: 'center' }}, { block: 'decorator', mods: { 'indent-b': 'xl' } } ],
																			content: 'For large companies'
																		},
																		{
																			elem: 'sale',
																			mix: [{ block: 'text', mods: { view: 'primary', align: 'center', weight: 'bold' }}, { block: 'decorator', mods: { 'indent-b': 'l' } }],
																			content: '$89'
																		},
																		{
																			elem: 'assets',
																			mix: { block: 'decorator', mods: { 'space-h': 'm' }},
																			content: [
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'part', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', weight: 'light' },
																											content: '50 presentations/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'wait-2', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', weight: 'light' },
																											content: '5 house of free support'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' }},
																					content: [
																						{
																							block: 'pt-icon-plus',
																							mods: { 'vertical-align': 'center' },
																							content: [
																								{
																									elem: 'icon',
																									elemMods: { 'indent-r': 's' },
																									content: [
																										{
																											block: 'icon',
																											mods: { name: 'statistic', size: 's', view: 'primary', round: 'default' },
																											mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																										}
																									]
																								},
																								{
																									block: 'content',
																									content: [
																										{
																											block: 'text',
																											mods: { size: 'm', view: 'primary', weight: 'light',  },
																											content: '10 campaigns/month'
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' }},
																	content: [
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l', width: 'available', view: 'action' },
																			text: 'Choose month plan'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Тариф */

								/* Медиа */
								{
									elem: 'section',
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'media',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'default' }}, 
															],
															content: [
																{
																	elem: 'video',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			elem: 'image',
																			mix: { block: 'pt-card', elem: 'image', elemMods: { shadow: 'bottom-inverse' }},
																			attrs: {
																				'style': 'max-height: 340px; overflow: hidden'
																			},
																			content: [
																				{
																					block: 'image',
																					attrs: {
																						style: 'width: 100%'
																					},
																					url: '/assets/i/fallon.png',
																				}
																			]
																		},
																		{
																			elem: 'play',
																			mix: [
																				{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																				{ block: 'pt-card', elem: 'play' }
																			]
																		},
																		{
																			block: 'text',
																			mix: [
																				{ block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'l' }}, 
																				{ block: 'promo-cards', elem: 'media-video-title' }
																			],
																			mods: { view: 'primary', size: 'xxxl', weight: 'bold' },
																			content: [
																				{
																					elem: 'wrap',
																					content: [
																						{
																							elem: 'row',
																							content: 'Mad Lib'
																						},
																						{
																							elem: 'row',
																							content: 'Theater with'
																						},
																						{
																							elem: 'row',
																							content: 'John Cena'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l', distribute: 'between' }},
																	content: [
																		{
																				block: 'pt-icon-plus',
																				mods: { 'vertical-align': 'center' },
																				content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 'xs' },
																					content: [
																						{
																							block: 'brand-logo',
																							mods: { 'name': 'ustwo', size: 's' }
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's' },
																							content: 'The Tonight Show…'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', font: 'mono' },
																			content: [
																				{
																					block: 'text',
																					mods: { weight: 'bold', display: 'inline' },
																					content: '512K '
																				},
																				'views'
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'media',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-default' }},
																{ block: 'component', mods: { whitepaper: 'default' }},
																{ block: 'pt-card', mods: { view: 'default' } }, 
															],
															content: [
																{
																	elem: 'article-author',
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																		{ block: 'component', mods: { whitepaper: 'inverse' }},
																		{ block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'l' }}
																	],
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 'xs' },
																					content: [
																						{
																							block: 'avatar',
																							content: [
																								{
																									elem: 'photo',
																									elemMods: { size: 'xs', view: 'example' },
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'm' },
																							content: 'James Bridle'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'screenshot',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			block: 'image',
																			mix: [{ block: 'pt-card', elem: 'image', elemMods: { shadow: 'top-inverse' } } ],
																			url: '/assets/i/heroes.png',
																		}
																	]
																},
																{
																	elem: 'article-title',
																	mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }],
																	content: [
																	{
																		block: 'text',
																		mods: { view: 'primary', size: 'xxxl', weight: 'bold', font: 'serif' },
																		mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																		content: 'Something is wrong on the internet'
																	},
																	{
																		block: 'text',
																		mods: { view: 'primary', size: 'm', font: 'mono'  },
																		content: 'I’m James Bridle. I’m a writer and artist concerned with…'
																	}]
																},
																{
																	elem: 'footer',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l', distribute: 'between' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 's', font: 'mono'  },
																			content: 'Nov 6 / 21 min read'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', font: 'mono' },
																			content: [
																			{
																				block: 'text',
																				mods: { weight: 'bold', display: 'inline' },
																				content: '512K '
																			},
																			'views'
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'media',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'default' }}
															],
															content: [
															{
																elem: 'cover',
																mix: { block: 'pt-card', elem: 'content', elemMods: { shadow: 'bottom-inverse' }},
																content: [
																	{
																		elem: 'image',
																		mix: { block: 'pt-card', elem: 'image', elemMods: { shadow: 'bottom-inverse' }},
																		content: [
																			{
																				block: 'image',
																				attrs: {
																					style: 'width: 100%'
																				},
																				url: '/assets/i/london.png',
																			}
																		]
																	},
																	{
																		elem: 'name',
																		mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } }],
																		content: [
																			{
																				elem: 'wrap',
																				content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxl', align: 'center', weight: 'bold' },
																					mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																					content: 'Pitchfork\'s Best New Music',
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'm', align: 'center', font: 'mono', style: 'italic' },
																					content: 'Pitchfork',
																				}]
																			}
																		]
																	}
																]
															},
															{
																block: 'playlist',
																mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l' } }],
																content: [
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
																	content: [
																		{
																			elem: 'track',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 's', weight: 'bold' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																					content: 'London',
																				},
																				{
																					elem: 'description',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'xs', weight: 'light', font: 'mono' },
																							content: 'Benjamin Clementine • At Least',
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', weight: 'bold' },
																			content: '7:25'
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
																	content: [
																		{
																			elem: 'track',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 's', weight: 'bold' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																					content: 'London',
																				},
																				{
																					elem: 'description',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'xs', weight: 'light', font: 'mono' },
																							content: 'Benjamin Clementine • At Least',
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', weight: 'bold' },
																			content: '7:25'
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
																	content: [
																		{
																			elem: 'track',
																			content: [
																			{
																				block: 'text',
																				mods: { view: 'primary', size: 's', weight: 'bold' },
																				mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																				content: 'London',
																			},
																			{
																				elem: 'description',
																				content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xs', weight: 'light', font: 'mono' },
																					content: 'Benjamin Clementine • At Least',
																				}]
																			}]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', weight: 'bold' },
																			content: '7:25'
																		}
																	]
																}]
															}]
														}
													]
												}
											]
										}
									]
								},
								/* /Медиа */

								/* Авторизация */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'auth',
															mix: { block: 'decorator', mods: { 'space-a': 'l' }},
															attrs: { style: 'height: 456px; box-sizing: border-box'},
															content: [
																{
																	elem: 'header',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																			attrs: { style: 'font-weight: 900' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Log in'
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: 'Welcome Back, Andrey Kopeyka'
																		}
																	]
																},
																{
																	block: 'pt-form',
																	mods: { view: 'default' },
																	mix: { block: 'auth', elem: 'form' },
																	content: [
																		{
																			elem: 'item',
																			elemMods: { 'indent-b': 'l' },
																			content: {
																				block: 'input',
																				mods: { theme: 'islands', width: 'available', size: 'l'},
																				placeholder: 'Username'
																			}
																		},
																		{
																			elem: 'item',
																			elemMods: { 'indent-b': 'xl' },
																			content: {
																				block: 'input',
																				mods: { theme: 'islands', width: 'available', size: 'l'},
																				placeholder: 'Password'
																			}
																		},
																		{
																			elem: 'item',
																			elemMods: { 'indent-b': 's' },
																			content: {
																				block: 'button',
																				mods: { theme: 'islands', width: 'full', size: 'l', view: 'action', width: 'available' },
																				text: 'Sign in'
																			}
																		},
																		{
																			elem: 'item',
																			elemMods: { 'indent-b': 'm' },
																			content: {
																				block: 'button',
																				mods: { theme: 'islands', width: 'full', size: 'l', width: 'available' },
																				text: 'Facebook'
																			}
																		},
																		{
																			elem: 'item',
																			content: {
																				block: 'text', mods: { view: 'link', size: 'l', align: 'center', width: 'available' },
																				content: 'Signup'
																			}
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'auth',
															mix: { block: 'decorator', mods: { 'space-a': 'l' }},
															attrs: { style: 'height: 456px; box-sizing: border-box; background: #fff;'},
															content: [
																{
																	elem: 'header',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																			attrs: { style: 'font-weight: 900' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Sign in'
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: 'Welcome Back, Andrey Kopeyka'
																		}
																	]
																},
																{
																	block: 'pt-form',
																	mods: { view: 'default' },
																	mix: { block: 'auth', elem: 'form' },
																	content: [
																		{
																			elem: 'item',
																			elemMods: { 'indent-b': 'l' },
																			content: {
																				block: 'input',
																				mods: { theme: 'islands', width: 'available', size: 'l'},
																				placeholder: 'Username'
																			}
																		},
																		{
																			elem: 'item',
																			elemMods: { 'indent-b': 'xl' },
																			content: {
																				block: 'input',
																				mods: { theme: 'islands', width: 'available', size: 'l'},
																				placeholder: 'Password'
																			}
																		},
																		{
																			elem: 'item',
																			elemMods: { 'indent-b': 's' },
																			content: {
																				block: 'button',
																				mods: { theme: 'islands', width: 'full', size: 'l', view: 'action', width: 'available'  },
																				text: 'Sign up'
																			}
																		},
																		{
																			elem: 'item',
																			elemMods: { 'indent-b': 'm' },
																			content: {
																				block: 'button',
																				mods: { theme: 'islands', width: 'full', size: 'l', width: 'available' },
																				text: 'Facebook'
																			}
																		},
																		{
																			elem: 'item',
																			content: {
																				block: 'text', mods: { view: 'link', size: 'l', align: 'center' },
																				content: 'Login'
																			}
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'auth',
															mix: { block: 'decorator', mods: { 'space-a': 'l' }},
															attrs: { style: 'height: 456px; box-sizing: border-box; background: #fff;'},
															content: [
																{
																	elem: 'header',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																			attrs: { style: 'font-weight: 900; line-height: 1em' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Forgot Password'
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: 'Please enter you email'
																		}
																	]
																},
																{
																	block: 'pt-form',
																	mods: { view: 'default' },
																	mix: { block: 'auth', elem: 'form' },
																	content: [
																		{
																			elem: 'item',
																			elemMods: { 'indent-b': 'l' },
																			content: {
																				block: 'input',
																				mods: { theme: 'islands', width: 'available', size: 'l' },
																				placeholder: 'Username'
																			}
																		},
																		{
																			elem: 'item',
																			content: {
																				block: 'button',
																				mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																				text: 'Reset'
																			}
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Авторизация */

								/* Офферы */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'offer',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'goods-header',
																	content: [
																		{
																			elem: 'goods-background',
																		},
																		{
																			elem: 'goods-price',
																			mix: [
																				{ block: 'text', mods: {font: 'serif', style: 'italic', weight: 'bold'} }
																			],
																			content: '$299'
																		}
																	]
																},
																{
																	elem: 'goods-item',
																	mix: { block: 'pt-card', elem: 'header' },
																	content: [
																		{
																			elem: 'goods-image-wrapper',
																			mix: { block: 'pt-card', elem: 'content' },
																			content: [
																				{
																					block: 'image',
																					mix: { block: 'pt-card', elem: 'image' },
																					url: '/assets/i/offer-goods-image.png'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'goods-info',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl', 'space-h': 'l', 'space-t': 'xxs' } },
																	content: [
																		{
																			block: 'text',
																			mix: [
																				{ block: 'decorator', mods: { 'indent-b': 'xs' } },
																			],
																			mods: { view: 'primary', font: 'mono', weight: 'bold', size: 'xl', align: 'center', transform: 'uppercase', spacing: 's' },
																			content: 'Nike Gyakusou Gaiter Boot'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', align: 'center' },
																			content: 'You have the goal. We have a gift'
																		}
																	]
																},
																{
																	elem: 'action',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-v': 'xl', distribute: 'center' }},
																	content: [
																		{
																			elem: 'wrap',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'secondary', size: 'm', weight: 'bold', align: 'center' },
																					content: 'Shop Now'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'offer',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'brand-content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' } },
																	content: [
																		{
																			elem: 'brand-image-wrapper',
																			mix: { block: 'pt-card', elem: 'content' },
																			content: [
																				{
																					elem: 'image',
																					mix: { block: 'pt-card', elem: 'image' },
																					attrs: { 
																						'style': 'height: 240px; overflow: hidden;' 
																					},
																					content: [
																						{
																							block: 'image',
																							url: '/assets/i/offer-brand-image.png'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxl', align: 'center', transform: 'uppercase', weight: 'bold', spacing: 's' },
																			mix: { block: 'decorator', mods: { 'indent-t': 's', 'indent-b': 'xs' }},
																			content: 'Ape shall never kill ape'
																		},
																		{
																			elem: 'brand-logo-wrapper',
																			mix: { block: 'text', mods: { align: 'center' } },
																			content: [
																				{
																					block: 'brand-logo',
																					mods: { name: 'bape', size: 's' },
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'brand-action',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-v': 'xl', distribute: 'center' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'm', weight: 'bold', align: 'center' },
																			content: 'Learn More'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'offer',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'default' } },
															],
															content: [
																{
																	elem: 'service-image-wrapper',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' }},
																			url: '/assets/i/offer-service-image.png'
																		}
																	]
																},
																{
																	elem: 'title',
																	mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-v': 'xxl', distribute: 'center' }},
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xl', font: 'serif', weight: 'bold', transform: 'uppercase', align: 'center', display: 'block' },
																			content: 'Brabus'
																		}
																	]
																},
																{
																	elem: 'service-info',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' }},
																	content: [
																		{
																			elem: 'wrap',
																			content: [
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 'xl'}},
																					mods: { view: 'primary', size: 'm', weight: 'semibold' },
																					content: 'Luxury and comfort never comprised. The BRABUS GLE 700 Coupe will lead to an unforgettable journey'
																				},
																				{
																					elem: 'price',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'from'
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'xxxl', weight: 'semibold' },
																							content: '$1200'
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Офферы */

								/* Коммерческая */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'product',
															mix: { block: 'pt-card' },
															content: [
																{
																	elem: 'footer',
																	elemMods: { state: 'fold' },
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l', align: 'between', 'vertical-align': 'bottom' }},
																	content: [
																		{
																			elem: 'about',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xl', weight: 'black', display: 'inline-block' },
																					content: '$'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxxl' ,weight: 'black', display: 'inline-block' },
																					content: '79'
																				},
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					mods: { view: 'secondary', size: 'm' },
																					content: 'Jeans skinny jacket by Levi Brand'
																				},
																				{
																					block: 'button',
																					mods: { theme: 'islands', size: 'l' },
																					text: 'Choose size'
																				}
																			]
																		},
																		{
																			elem: 'icon',
																			elemMods: { 'indent-r': 's' },
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'fave-1', size: 's', view: 'primary', round: 'default' },
																					mix: { block: 'theme', mods: { color: 'whitepaper-brand' }}
																				}
																			]
																		}
																	]
																},
																{
																	block: 'image',
																	mix: { block: 'pt-card', elem: 'image' },
																	url: '/assets/bem-starter-kit/ecommerce-product.png'
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'product',
															mix: { block: 'pt-card' },
															content: [
																{
																	elem: 'footer',
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																		{ block: 'component', mods: { whitepaper: 'brand' }},
																		{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l', align: 'between', 'vertical-align': 'bottom' }}
																	],
																	elemMods: { state: 'unfold' },
																	content: [
																		{
																			elem: 'about',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xl', weight: 'black', display: 'inline-block' },
																					content: '$'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxxl' ,weight: 'black', display: 'inline-block' },
																					content: '79'
																				},
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					mods: { view: 'primary', size: 'm' },
																					content: 'Jeans skinny jacket by Levi Brand'
																				},
																				{
																					block: 'button',
																					mods: { theme: 'islands', size: 'l' },
																					text: 'Choose size'
																				}
																			]
																		},
																		{
																			elem: 'icon',
																				elemMods: { 'indent-r': 's' },
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'fave-1', size: 's', view: 'brand', round: 'default' },
																					mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																				}
																			]
																		}
																	]
																},
																{
																	block: 'image',
																	mix: { block: 'pt-card', elem: 'image' },
																	url: '/assets/bem-starter-kit/ecommerce-product.png'
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'product',
															mix: { block: 'pt-card' },
															content: [
																{
																	elem: 'footer',
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																		{ block: 'component', mods: { whitepaper: 'inverse' }},
																		{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l', align: 'between', 'vertical-align': 'bottom' }}
																	],
																	elemMods: { state: 'unfold' },
																	content: [
																		{
																			elem: 'about',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xl', weight: 'black', display: 'inline-block' },
																					content: '$'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxxl' ,weight: 'black', display: 'inline-block' },
																					content: '79'
																				},
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																					mods: { view: 'primary', size: 'm' },
																					content: 'Jeans skinny jacket by Levi Brand'
																				},
																				{
																					block: 'button',
																					mods: { theme: 'islands', size: 'l' },
																					text: 'Choose size'
																				}
																			]
																		},
																		{
																			elem: 'icon',
																				elemMods: { 'indent-r': 's' },
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'fave-1', size: 's', view: 'primary', round: 'default' },
																					mix: { block: 'theme', mods: { color: 'whitepaper-default' }}
																				}
																			]
																		}
																	]
																},
																{
																	block: 'image',
																	mix: { block: 'pt-card', elem: 'image' },
																	url: '/assets/bem-starter-kit/ecommerce-product.png'
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Коммерческая */

								/* APP */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'app',
															mods: { view: 'monument-hypnotic' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'inverse' } }, 
															],
															content: [
																{
																	elem: 'info',
																	mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'l' } },
																	content: [
																	{
																		block: 'text',
																		mods: { size: 'm', view: 'primary', transform: 'uppercase', align: 'center', spacing: 'm' },
																		content: 'Bundle'
																	},
																	{
																		block: 'image',
																		mix: [{ block: 'decorator', mods: { 'indent-v': 'xl' } } ],
																		url: '/assets/i/group.png',
																	},
																	{
																		elem: 'price',
																		content: [
																		{
																			block: 'text',
																			mods: { size: 'l', view: 'primary', font: 'mono', with: 'semibold' },
																			content: '$299'
																		}]
																	}]
																},
																{
																	elem: 'developer-list',
																	mix: [ { block: 'pt-list' }, { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl' } }],
																	content: [
																	{
																		elem: 'wrap',
																		attrs: {
																			'style': 'width: 100%'
																		},
																		content: [
																		{
																			elem: 'item',
																			mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', distribute: 'between' }}, { block: 'pt-card', elem: 'item' }],
																			content: [
																			{
																				block: 'pt-icon-plus',
																				mods: { 'vertical-align': 'center' },
																				content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					content: [
																					{
																						block: 'brand-logo',
																						mods: { 'name': 'monument-valley', size: 's', form: 'mask' }
																					}]
																				},
																				{
																					elem: 'block',
																					content: [
																					{
																						block: 'text',
																						mods: { size: 's', view: 'primary' },
																						content: 'Monument Vallet'
																					},
																					{
																						block: 'text',
																						mods: { size: 's', view: 'ghost' },
																						content: 'by ustwo games'
																					}]
																				}]
																			},
																			{
																				block: 'badge',
																				mods: { view: 'default' },
																				content: '$99'
																			}]
																		},
																		{
																			elem: 'item',
																			mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', distribute: 'between' }}, { block: 'pt-card', elem: 'item' }],
																			content: [
																			{
																				block: 'pt-icon-plus',
																				mods: { 'vertical-align': 'center' },
																				content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					content: [
																					{
																						block: 'brand-logo',
																						mods: { 'name': 'monument-valley-2', size: 's', form: 'mask'}
																					}]
																				},
																				{
																					elem: 'block',
																					content: [
																					{
																						block: 'text',
																						mods: { size: 's', view: 'primary' },
																						content: 'Monument Valley 2'
																					},
																					{
																						block: 'text',
																						mods: { size: 's', view: 'ghost' },
																						content: 'by ustwo games'
																					}]
																				}]
																			},
																			{
																				block: 'badge',
																				mods: { view: 'default' },
																				content: '$99'
																			}]
																		}]
																	}]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'app',
															mods: { view: 'monument' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'inverse' } }, 
															],
															content: [
																{
																	elem: 'cover',
																	mix: [
																			{ block: 'pt-card', elem: 'image', elemMods: { shadow: 'bottom-inverse', size: 'cover' } },
																	],
																	content: [
																		{
																			block: 'image',
																			url: '/assets/i/monument.png',
																		}
																	]
																},
																{
																		elem: 'preview',
																		mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' } },
																		content: [
																		{
																				block: 'image',
																				mix: [
																					{ block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
																				],
																				url: '/assets/i/ustwo.svg',

																		},
																		{
																				elem: 'about',
																				mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl', distribute: 'center' }},
																				content: [
																				{
																						block: 'text',
																						mods: { size: 'xxxl', view: 'primary', align: 'center', weight: 'bold' },
																						mix: [{ block: 'decorator', mods: { 'space-b': 's' }}],
																						content: 'From our Bafta award winning hit!'
																				},
																				{
																						block: 'text',
																						mods: { size: 'm', view: 'secondary', align: 'center' },
																						content: 'Enjoy beautiful meditative puzzle game'
																				}]
																		}]
																},
																{
																		elem: 'item',
																		mix: [
																			{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl', distribute: 'between' } },  
																			{ block: 'pt-card', elem: 'item' }
																		],
																		content: [
																		{
																				block: 'pt-icon-plus',
																				mods: { 'vertical-align': 'center' },
																				content: [
																				{
																						elem: 'icon',
																						elemMods: { 'indent-r': 's' },
																						content: [
																						{
																								block: 'brand-logo',
																								mods: { 'name': 'monument-valley-2', size: 's', form: 'mask' }
																						}]
																				},
																				{
																						elem: 'block',
																						content: [
																						{
																								block: 'text',
																								mods: { size: 's', view: 'primary' },
																								content: 'Monument Valley'
																						},
																						{
																								block: 'text',
																								mods: { size: 's', view: 'ghost' },
																								content: 'by ustwo games'
																						}]
																				}]
																		},
																		{
																				block: 'badge',
																				mods: { view: 'default' },
																				content: '$99'
																		}]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'app',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
																{ block: 'component', mods: { whitepaper: 'inverse' }},
																{ block: 'pt-card', mods: { view: 'default' }}, 
															],
															content: [
																{
																	elem: 'good-info',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' }},
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
																			url: '/assets/i/good-cover.png'
																		},
																		{
																			block: 'text',
																			mods: { size: 'xxxl', view: 'primary', weight: 'bold' },
																			mix: { block: 'decorator', mods: { 'space-b': 'l' }},
																			content: 'From our Bafta award winning hit'
																		},
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'ghost' },
																			content: 'Enjoy beautiful levels filled with illusory, meditative puzzles'
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: [
																		{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl', distribute: 'between' } }, 
																		{ block: 'pt-card', elem: 'item' }
																	],
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					content: [
																						{
																							block: 'brand-logo',
																							mods: { 'name': 'ustwo', size: 's'}
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'm' },
																							content: 'Monument Valley'
																						},
																						{
																								block: 'text',
																								mods: { size: 's', view: 'ghost' },
																								content: 'by ustwo games'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'badge',
																			mods: { view: 'default' },
																			content: '$99'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /APP */

								/* Информер */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'informer',
															mods: { view: 'alert' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-alert' }},
																{ block: 'component', mods: { whitepaper: 'alert' }},
																{ block: 'pt-card' },
																{ block: 'pt-informer', mods: { view: 'alert' }}
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' }},
																	content: [
																		{
																			elem: 'icon-wrapper',
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'minus', size: 'm', view: 'alert' }
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xxl', weight: 'bold', align: 'center', view: 'primary' },
																			content: 'Error'
																		},
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' }},
																			mods: { size: 'm', align: 'center', view: 'primary' },
																			content: 'Currently payments not available'
																		},
																		{
																			elem: 'info',
																			content: [
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
																					mods: { size: 's', weight: 'bold', view: 'primary' },
																					content: 'Information'
																				},
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 'l' },
																							content: [
																								{
																									block: 'image',
																									url: '/assets/bem-starter-kit/mastercard.svg',
																									width: 36
																								}
																							]
																						},
																						{
																							elem: 'block',
																							content: {
																								block: 'text',
																								mods: { mods: 'm', view: 'primary' },
																								content: '4276 55•• •••• 5371'
																							}
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'button',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' }},
																	content: [
																		{
																			block: 'button',
																			mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																			text: 'Done'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'informer',
															mods: { view: 'warning' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-warning' }},
																{ block: 'component', mods: { whitepaper: 'warning' }},
																{ block: 'pt-card' },
																{ block: 'pt-informer', mods: { view: 'warning' }}
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' }},
																	content: [
																		{
																			elem: 'icon-wrapper',
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'attention', size: 'm', view: 'warning' }
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xxl', weight: 'bold', align: 'center', view: 'primary' },
																			content: 'Warning'
																		},
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' }},
																			mods: { size: 'm', align: 'center', view: 'primary' },
																			content: 'Currently payments not available'
																		},
																		{
																			elem: 'info',
																			content: [
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
																					mods: { size: 's', weight: 'bold', view: 'primary' },
																					content: 'Transfer to card'
																				},
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 'l' },
																							content: [
																								{
																									block: 'image',
																									url: '/assets/bem-starter-kit/mastercard.svg',
																									width: 36
																								}
																							]
																						},
																						{
																							elem: 'block',
																							content: {
																								block: 'text',
																								mods: { mods: 'm', view: 'primary' },
																								content: '4276 55•• •••• 5371'
																							}
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'button',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' }},
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																		text: 'Done'
																	}
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'informer',
															mods: { view: 'success' },
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-success' }},
																{ block: 'component', mods: { whitepaper: 'success' }},
																{ block: 'pt-card' },
																{ block: 'pt-informer', mods: { view: 'success' }}
															],
															content: [
																{
																	elem: 'content',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' }},
																	content: [
																		{
																			elem: 'icon-wrapper',
																			content: [
																				{
																					block: 'icon',
																					mods: { name: 'check', size: 'm', view: 'success' }
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xxl', weight: 'bold', align: 'center', view: 'primary' },
																			content: 'Success'
																		},
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' }},
																			mods: { size: 'm', align: 'center', view: 'primary' },
																			content: 'Payment completed'
																		},
																		{
																			elem: 'info',
																			content: [
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
																					mods: { size: 's', weight: 'bold', view: 'primary' },
																					content: 'Information'
																				},
																				{
																					block: 'text',
																					mods: { size: 's', view: 'primary' },
																					content: 'Just visited the best beach for surfing. The waves are awesome.'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'button',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' }},
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																		text: 'Done'
																	}
																}
															]
														}
													]
												}
											]
										}
									]
								},
								/* /Информер */

								/* Донаты */
								{
									elem: 'section',
									mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
									content: [
										{
											block: 'tpl-grid',
											mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6' },
											content: [
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'donate',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'person-image-wrapper',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'pt-card', elem: 'image' },
																			url: '/assets/i/donate-person-image.png'
																		}
																	]
																},
																{
																	elem: 'person-avatar-wrapper',
																	mix: { block: 'pt-card', elem: 'header' },
																	content: [
																		{
																			elem: 'person-avatar',
																			mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'm' }},
																		}
																	]
																},
																{
																	elem: 'person-info',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'l', 'space-t': 'xxl' } },
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																			mods: { view: 'primary', size: 'xxl', weight: 'bold' },
																			content: [
																				'Sam Harris ',
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxl', weight: 'regular', style: 'italic', display: 'inline' },
																					content: 'is creating The Waking Up Podcast'
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'm' },
																			content: 'I launched Waking Up in 2015, and it regularly ranks among the top 100 podcasts in the US, ' +
																			'UK, Canada, and Australia. It has been selected by Apple as one of "iTunes Best" and has won a Webby ' +
																			'Award for best podcas…'
																		}
																	]
																},
																{
																	elem: 'person-action',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'm', 'space-v': 'xl' }},
																	content: [
																		{
																			block: 'button',
																			mix: { block: 'text', mods: { view: 'inverse', size: 's', transform: 'uppercase' } },
																			mods: { theme: 'islands', size: 'l', type: 'submit', view: 'person-donate', width: 'full' },
																			text: 'Send $10'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'donate',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'project-image-wrapper',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'pt-card', elem: 'image' },
																			url: '/assets/i/donate-project-image.png'
																		},
																		{
																			elem: 'project-play',
																		},
																		{
																			elem: 'project-progress-bar',
																		}
																	]
																},
																{
																	elem: 'project-info',
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-default' }},
																		{ block: 'component', mods: { whitepaper: 'default' }},
																		{ block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'l' }}
																	],	
																	content: [
																		{
																				elem: 'project-countdowns',
																				mix: { block: 'decorator', mods: { 'indent-v': 'xs' } },
																				content: [
																				{
																					elem: 'amount-wrapper',
																					mix: { block: 'decorator', mods: { 'indent-r': 'xxxxl' } },
																					content: [
																						{
																							elem: 'amount',
																							content: [
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 'l', weight: 'bold' },
																									content: '$4,464'
																								}
																							]
																						},
																						{
																							elem: 'description',
																							content: [
																								{
																									block: 'text',
																									mods: { view: 'secondary', size: 'xs' },
																									content: 'pledged of 6,217 goal'
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'days-wrapper',
																					content: [
																						{
																							elem: 'days',
																							content: [
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 'l', weight: 'bold' },
																									content: '32'
																								}
																							]
																						},
																						{
																							elem: 'description',
																							content: [
																								{
																									block: 'text',
																									mods: { view: 'secondary', size: 'xs' },
																									content: 'days to go'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxl', weight: 'bold' },
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xl', weight: 'bold' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																					content: 'MIRAGE: A Feature-Packed Delay Pedal by RedShift Effects'
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'm' },
																			content: 'A high-quality, hand-built tap tempo delay pedal with ' +
																			'modulated filtering, plenty of delay time, and a handful …'
																		}
																	]
																},
																{
																	elem: 'project-action',
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-default' }},
																		{ block: 'component', mods: { whitepaper: 'default' }},
																		{ block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'm', 'space-v': 'l' }},
																	],
																	content: [
																		{
																			block: 'button',
																			mix: { block: 'text', mods: { view: 'inverse', size: 'm' } },
																			mods: { theme: 'islands', size: 'l', type: 'submit', view: 'project-donate', width: 'full', 'border-radius': 'full' },
																			text: 'Back this project'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'fraction',
													elemMods: { 's-col': '3', 'm-col': '2' },
													content: [
														{
															block: 'donate',
															mix: { block: 'pt-card', mods: { view: 'default' }},
															content: [
																{
																	elem: 'event-image-wrapper',
																	mix: { block: 'pt-card', elem: 'content' },
																	content: [
																		{
																			block: 'image',
																			mix: { block: 'pt-card', elem: 'image' },
																			attrs: { 'style': 'max-height: 260px;'},
																			url: '/assets/i/donate-event-image.png'
																		}
																	]
																},
																{
																	elem: 'event-header',
																	mix: { block: 'pt-card', elem: 'header', elemMods: { distribute: 'center' }},
																	content: [
																		{
																			elem: 'wrap',
																			content: [
																				{
																					elem: 'event-avatar-wrapper',
																					content: {
																						elem: 'event-avatar',
																					}
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xxxl', weight: 'bold', style: 'italic', align: 'center', transform: 'uppercase' },
																					mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																					content: 'Ann’s B-day'
																				},
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 's', align: 'center' },
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'bold', display: 'inline' },
																							content: '25:12:08:43 '
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', display: 'inline' },
																							content: 'until the end'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'event-info',
																	mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl' }},
																	content: [
																		{
																			elem: 'control',
																			content: '-'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: '4xl', weight: 'semibold', align: 'center' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																			content: '$10'
																		},
																		{
																			elem: 'control',
																			content: '+'
																		}
																	]
																},
																{
																	elem: 'event-action',
																	mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'l', 'space-v': 'xl' }},
																	content: [
																		{
																			elem: 'event-avatar-group',
																			content: [
																				{
																					elem: 'event-mini-avatar',
																					elemMods: { view: '1' },
																					mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'xs' }},
																				},
																				{
																					elem: 'event-mini-avatar',
																					elemMods: { view: '2' },
																					mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'xs' }},
																				},
																				{
																					elem: 'event-mini-avatar',
																					elemMods: { view: '3' },
																					mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'xs' }},
																				},
																				{
																					elem: 'event-mini-avatar',
																					elemMods: { view: '4' },
																					mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'xs' }},
																				},
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
																					mods: { view: 'primary', size: 'm', weight: 'semibold' },
																					content: '+6'
																				}
																			]
																		},
																		{
																			block: 'button',
																			mix: [
																				{ block: 'text', mods: { view: 'inverse', weight: 'bold', transform: 'uppercase', style: 'italic' } },
																				{ block: 'decorator', mods: { 'indent-l': 'xl' }}
																			],
																			mods: { theme: 'islands', size: 'l', type: 'submit', view: 'event-donate', 'border-radius': 'full' },
																			text: 'Make a party'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
								/* /Донаты */

							]
						}

					]
				}
			]
		}
	]
};
