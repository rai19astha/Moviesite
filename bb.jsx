  useEffect(() => {
    const initialCheckedState = {};
    data.forEach((_, index) => {
      initialCheckedState[index] = false; // Initialize all checkboxes as unchecked
    });
    setCheckedItems(initialCheckedState);
  }, [data]);
