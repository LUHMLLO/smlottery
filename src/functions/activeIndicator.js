export const activeIndicator_Text = (target, current) => {
    if (target == current) {
        return 'color-accent'
    } else {
        return ''
    }
}

export const activeIndicator_Bg = (target, current) => {
    if (target == current) {
        return 'bg-accent'
    } else {
        return 'bg-none'
    }
}
