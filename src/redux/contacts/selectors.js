import { createSelector } from '@reduxjs/toolkit';

// Assuming you have a state structure like state.contacts.items and state.filters.filter
export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filters.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
