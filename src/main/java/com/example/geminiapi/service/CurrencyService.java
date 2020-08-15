package com.example.geminiapi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.example.geminiapi.domain.Currency;
import com.example.geminiapi.domain.CurrencyRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CurrencyService {

    private final CurrencyRepository currencyRepository;

    public List<Currency> findAll() {
        return currencyRepository.findAll();
    }
}