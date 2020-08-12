package com.example.geminiapi.controller;

import lombok.Builder;
import lombok.Getter;
import com.example.geminiapi.domain.Currency;

import java.util.List;

@Getter
@Builder
public class CurrencyResponse {

    private List<Currency> currencies;
}