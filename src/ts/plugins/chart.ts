import { Chart, Legend, Title, Tooltip } from "chart.js";

Chart.register(Legend, Title, Tooltip);

Chart.defaults.color = "#333";
Chart.defaults.borderColor = "rgba(0, 0, 0, 0.1)";

Chart.defaults.plugins.title.display = false;
Chart.defaults.plugins.legend.display = false;

Chart.defaults.font.size = 8;
Chart.defaults.font.lineHeight = 1.5;

Chart.defaults.layout.padding = 0;
