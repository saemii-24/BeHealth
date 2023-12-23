import React, { createContext, useEffect, useState } from 'react';

import spring from '../data/spring';
import summer from '../data/summer';
import autumn from '../data/autumn';
import winter from '../data/winter';
import { SeasonType } from '../data/spring';

interface SeasonContextType {
  season?: string;
  setSeason?: (season: string) => void;
}
const SeasonContext = createContext<SeasonContextType>({});

interface SeasonDataContextType {
  seasonData?: SeasonType[];
  setSeasonData?: (seasonData: SeasonType[]) => void;
}

const SeasonDataContext = createContext<SeasonDataContextType>({});

const SeasonContextProvider = ({ children }) => {
  let [season, setSeason] = useState<string>('');
  let [seasonData, setSeasonData] = useState<SeasonType[]>(spring);

  const updateData = (newData: SeasonType[]) => {
    setSeasonData(newData);
  };

  const updateData2 = (newData: string) => {
    setSeason(newData);
  };

  let theMonth = new Date().getMonth();
  useEffect(() => {
    if (theMonth === 2 || theMonth === 3 || theMonth === 4) {
      setSeason('봄');
      setSeasonData(spring);
    } else if (theMonth === 5 || theMonth === 6 || theMonth === 7) {
      setSeason('여름');
      setSeasonData(summer);
    } else if (theMonth === 8 || theMonth === 9 || theMonth === 10) {
      setSeason('가을');
      setSeasonData(autumn);
    } else if (theMonth === 11 || theMonth === 0 || theMonth === 1) {
      setSeason('겨울');
      setSeasonData(winter);
    }
  }, [theMonth]);

  return (
    <SeasonContext.Provider value={{ season, setSeason: updateData2 }}>
      <SeasonDataContext.Provider value={{ seasonData, setSeasonData: updateData }}>
        {children}
      </SeasonDataContext.Provider>
    </SeasonContext.Provider>
  );
};

export { SeasonDataContext, SeasonContext, SeasonContextProvider };
