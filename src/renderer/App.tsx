import { MemoryRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MantineProvider, Tabs, TabsProps, ColorSchemeProvider, ColorScheme, Group, Text } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import AppShellPage from './AppShellPage';
import { SplitDirection } from '@devbookhq/splitter'
import ReactSplit from '@devbookhq/splitter';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';
import { DynamicTerrain } from './canvas2';
const Hello = () => {
  return (
    <AppShellPage />
  );
};

const Canvas = () => {
  return (
    <ReactSplit minHeights={[100]} direction={SplitDirection.Vertical} initialSizes={[90, 10]} >
        <div id='map'></div>
        <div></div>
    </ReactSplit>
  )
}

const AccountPage = () => {
  return (
    <Group direction='column' position='center'>
      <Text>Account Page</Text>
    </Group>
  )
}

const PublishPage = () => {
  return (
    <Group direction='column' position='center'>
      <Text>Publish to cloud</Text>
    </Group>
  )
}
export default function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />} >
          <Route index element={<Canvas />} />
          <Route path='account' element={<AccountPage />} />
          <Route path='publish' element={<PublishPage />} /> 
          <Route path='*' element={<Canvas />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}
