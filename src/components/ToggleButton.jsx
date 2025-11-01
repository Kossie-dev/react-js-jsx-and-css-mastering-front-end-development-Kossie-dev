import {useTheme} from "../context/Theme"

export default function ThemeToggle() {
    const {darkmode, setDarkmode} = useTheme();

    return (
        <button
            onClick={() => setDarkmode(!darkmode)}
            className="px-4 py-2 rounded-lg transition-colors duration-300 bg-[var(--secondary)] text-[var(--secondary-foreground)] border border-[var(--border)]"
        >
            {darkmode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
    )
}
