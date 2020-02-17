import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
export function useTabletHook() {
    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.down('xs'))
    return match
}