/** Style reminder — Palm Archive: global shell stays warm, factual, accessible and uncluttered. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Legal from "./pages/Legal";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/privacy">{() => <Legal kind="privacy" />}</Route>
    <Route path="/terms">{() => <Legal kind="terms" />}</Route>
    <Route path="/cookies">{() => <Legal kind="cookies" />}</Route>
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
