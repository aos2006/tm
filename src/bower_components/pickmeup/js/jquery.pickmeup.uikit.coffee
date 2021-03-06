###*
 * @package		PickMeUp - jQuery datepicker plugin
 * @author		Nazar Mokrynskyi <nazar@mokrynskyi.com>
 * @copyright	Copyright (c) 2015, Nazar Mokrynskyi
 * @license		MIT License, see license.txt
###
do ($ = jQuery) ->
	$.fn.pickmeup_uikit	= (initial_options) ->
		this.pickmeup(initial_options)
		this.each ->
			options			= $(this).data('pickmeup-options')
			$(this.pickmeup)
				.removeClass('pickmeup')
				.addClass('pickmeup-uikit uk-panel-box')
				.css('padding', 0)
				.css('box-sizing', 'content-box')
	do ->
		# Styles
		panel		= $('<div class="uk-panel-box" />')
		button		= $('<button class="uk-button" />')
		link_hover	= $('<button class="uk-button-link" />').hover()
		text_muted	= $('<span class="uk-text-muted" />')
		disabled	= $('<button class="uk-button" disabled />')
		selected	= $('<div class="uk-alert" />')
		parameters	=
			$border_radius						: '.4em'
			$background							: panel.css('background-color')
			$color								: panel.css('color')
			$background_hover					: '$background'
			$color_hover						: link_hover.css('color')
			$nav_color							: '$color'
			$nav_color_hover					: '$color_hover'
			$not_in_month						: text_muted.css('color')
			$not_in_month_hover					: text_muted.css('color')
			$disabled							: disabled.css('color')
			$selected			 				: selected.css('color')
			$selected_background 				: selected.css('background-color')
			$not_in_month_selected_background	: '$selected_background'
			$day_of_week						: '$not_in_month_hover'
			$today_background					: '$not_in_month_selected_background'
			$today_color						: '$color_hover'
		###
			Style string obtained from scss style, before conversion to css file was processed with regular expression replacement
			Find	: ((\$[a-z-]+)\t+: )(.*);
			Replace	: $1'$2';
			Resulting css was minified
		###
		style	= '.pickmeup{background:"$background";border-radius:"$border-radius";-moz-box-sizing:content-box;box-sizing:content-box;display:none;position:absolute}.pickmeup *{-moz-box-sizing:border-box;box-sizing:border-box}.pickmeup .pmu-instance{display:inline-block;height:13.8em;padding:.5em;text-align:center;width:15em}.pickmeup .pmu-instance .pmu-button{color:"$color";cursor:pointer;outline:0;text-decoration:none}.pickmeup .pmu-instance .pmu-today{background:"$today-background";color:"$today-color"}.pickmeup .pmu-instance .pmu-button:hover{background:"$background-hover";color:"$color-hover"}.pickmeup .pmu-instance .pmu-not-in-month{color:"$not-in-month"}.pickmeup .pmu-instance .pmu-disabled,.pickmeup .pmu-instance .pmu-disabled:hover{color:"$disabled";cursor:default}.pickmeup .pmu-instance .pmu-selected{background:"$selected-background";color:"$selected"}.pickmeup .pmu-instance .pmu-not-in-month.pmu-selected{background:"$not-in-month-selected-background"}.pickmeup .pmu-instance nav{color:"$nav-color";display:-ms-flexbox;display:-webkit-flex;display:flex;line-height:2em}.pickmeup .pmu-instance nav *:first-child :hover{color:"$nav-color-hover"}.pickmeup .pmu-instance nav .pmu-prev,.pickmeup .pmu-instance nav .pmu-next{display:none;height:2em;width:1em}.pickmeup .pmu-instance nav .pmu-month{width:14em}.pickmeup .pmu-instance .pmu-years *,.pickmeup .pmu-instance .pmu-months *{display:inline-block;line-height:3.6em;width:3.5em}.pickmeup .pmu-instance .pmu-day-of-week{color:"$day-of-week";cursor:default}.pickmeup .pmu-instance .pmu-day-of-week *,.pickmeup .pmu-instance .pmu-days *{display:inline-block;line-height:1.5em;width:2em}.pickmeup .pmu-instance .pmu-day-of-week *{line-height:1.8em}.pickmeup .pmu-instance:first-child .pmu-prev,.pickmeup .pmu-instance:last-child .pmu-next{display:block}.pickmeup .pmu-instance:first-child .pmu-month,.pickmeup .pmu-instance:last-child .pmu-month{width:13em}.pickmeup .pmu-instance:first-child:last-child .pmu-month{width:12em}.pickmeup:not(.pmu-view-days) .pmu-days,.pickmeup:not(.pmu-view-days) .pmu-day-of-week,.pickmeup:not(.pmu-view-months) .pmu-months,.pickmeup:not(.pmu-view-years) .pmu-years{display:none}'
		style	= style.replace(/\.pickmeup/g, '.pickmeup-uikit')
		for parameter, value of parameters
			if parameters[value]
				value	= parameters[value]
			parameter	= '"' + parameter.replace(/_/g, '-') + '"'
			style	= style.split(parameter).join(value)
		$('head').append("<style>#{style}</style>")
		return
	return
